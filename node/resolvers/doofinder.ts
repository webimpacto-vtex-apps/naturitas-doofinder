import { ServiceContext } from "@vtex/api";
import axios from 'axios'

declare var process: {
  env: {
    VTEX_APP_ID: string
  }
}

const appId = process.env.VTEX_APP_ID

export async function searchDoofinderProducts(_root: any, {query}: {query:string}, ctx: ServiceContext) {

  const doofinderProducts = await doofinderAPISearch(ctx, query)
  const vtexProducts = await vtexSearch(ctx, doofinderProducts.results)

  return orderProducts(doofinderProducts, vtexProducts)
}

async function doofinderAPISearch(ctx: ServiceContext, query: string) {
  const settings = await ctx.clients.apps.getAppSettings(appId)

  let headers = {
    'authorization': `Token ${settings.doofApiKey}`,
    'Vtex-Use-Https': true,
    'Proxy-Authorization': ctx.vtex.authToken,
    'VtexIdclientAutCookie': ctx.cookies.get('VtexIdclientAutCookie')
  }

  const params = {
    hashid: settings.doofHashId,
    query,
    rpp:20,
    page:1,
    transformer:'onlyid',
    'filter[categories][0]': ["Integratori - Fitoterapia"]
  }

  let results = await axios.get(`https://${settings.doofRegion}-search.doofinder.com/5/search`, {params, headers })

  return results.data
}

async function vtexSearch(ctx: ServiceContext, doofinderProductsId: []) {
  const searchIdProductParams = transformIdProductsParams(doofinderProductsId)

  let headers = {
    'Vtex-Use-Https': true,
    'Proxy-Authorization': ctx.vtex.authToken,
    'VtexIdclientAutCookie': ctx.cookies.get('VtexIdclientAutCookie')
  }

  let results = await axios.get(`/api/catalog_system/pub/products/search?${searchIdProductParams}`, { headers })
  return results.data;
}

async function orderProducts(doofinderProducts: any, vtexProducts: any) {
  let orderProducts: any = {};

  doofinderProducts.results.map((item: any, i: number) => {
    orderProducts[item.id] = i;
  })

  return vtexProducts.sort((a: any, b: any) => {
    return orderProducts[a.productId] - orderProducts[b.productId]
  })
}

/**
   * Transform [{id: xx}, {id: yy}] to => fq=productId:xx&fq=productId:yy
   * for VTEX Search API Query
   */
function transformIdProductsParams(doofinderProductsId: any) {
  return doofinderProductsId.map(
    (item: any) => `fq=productId:${item.id}`
  ).join('&')
}
