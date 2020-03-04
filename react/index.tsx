import { canUseDOM } from 'vtex.render-runtime'
import {
  doofinderTemplate,
  doofinderResultsTemplate,
  doofinderFacetsTemplate,
} from './components/template'
import { parse_query_string, loadScript } from './utils'

if (canUseDOM) {
  const { __doofHashId__, __doofRegion__ } = window
  /*if (__doofHashId__ && __doofRegion__) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = true;

    a.src = `//${__doofRegion__}-search.doofinder.com/5/script/${__doofHashId__}.js`;
    document.body.appendChild(a);
  }
  else {
    console.error("Doofinder HashID or Region is empty. Please fill at the APP config in VTEX Admin");
  }*/

  let account = '';

  if (__doofHashId__ && __doofRegion__) {
    switch (__doofHashId__) {
      case "fe457aad4714f737669d109943063f0c":
        account = 'naturitasit-naturitas-doofinder-2-x-';
        window.dfEmbeddedLayers = [
          {
            queryInput: '#query_input_id',
            hashid: __doofHashId__,
            zone: __doofRegion__,
            redirections: {
              captureForm: true,
            },
            mainContainerId: 'vtex-embedded',
            searchParams: {
              rpp: 24,
            },
            display: {
              lang: 'it',
              insertionPoint: '#doofinder-search',
              template: doofinderTemplate,
              results: {
                template: doofinderResultsTemplate,
              },
              facets: {
                shownTerms: 5,
                panelTemplate: doofinderFacetsTemplate,
              },
              templateFunctions: {
                myBold: function() {
                  // the returned function receives the text and
                  // a render function as an argument
                  return function(text: any, render: any) {
                    // you can transform the text before or after
                    // rendering it
                    return '<b>' + render(text) + '</b>'
                  }
                },
              },
              translations: {
                'Sorry, no results found.': 'Sorry, no results found.',
                'not-found-title': 'Ci dispiace, non abbiamo trovato il prodotto che stai cercando...',
                'not-found-subtitle1': 'Non ti preoccupare!',
                'not-found-subtitle2': 'Di seguito alcuni consigli per aiutarti a trovare quello di cui hai bisogno:',
                'not-found-tip1': 'Verifica la tua ortografia e cerca di nuovo',
                'not-found-tip2': 'Prova con un altro termine di ricerca',
                'not-found-tip3': 'Esplora le nostre categorie',
                'View less…': '- Vedi di meno',
                "View more…": "+ Vedi di pi&ugrave;"
              },
            },
            callbacks: {
              loaded: function() {
                let query = window.location.search.substring(1)
                let qs = parse_query_string(query)

                const queryInput: any = document.getElementById('query_input_id')
                if (queryInput) {
                  queryInput.value = qs.q
                }
                var evt = document.createEvent('HTMLEvents')
                evt.initEvent('df:input:valueChanged')
                queryInput.dispatchEvent(evt)
              },
              resultsReceived: function(response: any) {
                test(response, account)
              },
            },
          },
        ]
        break;
      case "6f0d9e1c4faf2c184a944612d375349b":
        account = 'naturitasfr-naturitas-doofinder-2-x-';
        window.dfEmbeddedLayers = [
          {
            queryInput: '#query_input_id',
            hashid: __doofHashId__,
            zone: __doofRegion__,
            redirections: {
              captureForm: true,
            },
            mainContainerId: 'vtex-embedded',
            searchParams: {
              rpp: 24,
            },
            display: {
              lang: 'fr',
              insertionPoint: '#doofinder-search',
              template: doofinderTemplate,
              results: {
                template: doofinderResultsTemplate,
              },
              facets: {
                shownTerms: 5,
                panelTemplate: doofinderFacetsTemplate,
              },
              templateFunctions: {
                myBold: function() {
                  // the returned function receives the text and
                  // a render function as an argument
                  return function(text: any, render: any) {
                    // you can transform the text before or after
                    // rendering it
                    return '<b>' + render(text) + '</b>'
                  }
                },
              },
              translations: {
                'Sorry, no results found.': 'Sorry, no results found.',
                'not-found-title': "Nous sommes désolés, nous n'avons pas trouvé le produit que vous cherchez...",
                'not-found-subtitle1': 'Ne vous inquiétez pas !',
                'not-found-subtitle2': 'Voici quelques conseils pour vous aider à trouver ce que vous cherchez. ',
                'not-found-tip1': "Vérifiez l'orthographe et essayez à nouveau",
                'not-found-tip2': 'Faites une autre recherche ',
                'not-found-tip3': 'Découvrez les nouvelles catégories',
              },
            },
            callbacks: {
              loaded: function() {
                let query = window.location.search.substring(1)
                let qs = parse_query_string(query)

                const queryInput: any = document.getElementById('query_input_id')
                if (queryInput) {
                  queryInput.value = qs.q
                }
                var evt = document.createEvent('HTMLEvents')
                evt.initEvent('df:input:valueChanged')
                queryInput.dispatchEvent(evt)
              },
              resultsReceived: function(response: any) {
                test(response, account)
              },
            },
          },
        ]
        break;
      case "7331ac1da8af88edebf1b581fdc00cdb":
        account = 'naturitaspt-naturitas-doofinder-2-x-';
        window.dfEmbeddedLayers = [
          {
            queryInput: '#query_input_id',
            hashid: __doofHashId__,
            zone: __doofRegion__,
            redirections: {
              captureForm: true,
            },
            mainContainerId: 'vtex-embedded',
            searchParams: {
              rpp: 24,
            },
            display: {
              lang: 'pt',
              insertionPoint: '#doofinder-search',
              template: doofinderTemplate,
              results: {
                template: doofinderResultsTemplate,
              },
              facets: {
                shownTerms: 5,
                panelTemplate: doofinderFacetsTemplate,
              },
              templateFunctions: {
                myBold: function() {
                  // the returned function receives the text and
                  // a render function as an argument
                  return function(text: any, render: any) {
                    // you can transform the text before or after
                    // rendering it
                    return '<b>' + render(text) + '</b>'
                  }
                },
              },
              translations: {
                'Sorry, no results found.': 'Sorry, no results found.',
                'not-found-title': 'Lamentamos, mas não conseguimos encontrar o produto de que está à procura...',
                'not-found-subtitle1': 'Não se preocupe!',
                'not-found-subtitle2': 'Aqui tem alguns dicas para o ajudar a encontrar o que procura:',
                'not-found-tip1': 'Verifique a ortografia e tente novamente',
                'not-found-tip2': 'Experimente com outro termo de busca',
                'not-found-tip3': 'Explore as nossas categorias',
              },
            },
            callbacks: {
              loaded: function() {
                let query = window.location.search.substring(1)
                let qs = parse_query_string(query)

                const queryInput: any = document.getElementById('query_input_id')
                if (queryInput) {
                  queryInput.value = qs.q
                }
                var evt = document.createEvent('HTMLEvents')
                evt.initEvent('df:input:valueChanged')
                queryInput.dispatchEvent(evt)
              },
              resultsReceived: function(response: any) {
                test(response, account)
              },
            },
          },
        ]
        break;
      default:
        window.dfEmbeddedLayers = [
          {
            queryInput: '#query_input_id',
            hashid: __doofHashId__,
            zone: __doofRegion__,
            redirections: {
              captureForm: true,
            },
            mainContainerId: 'vtex-embedded',
            searchParams: {
              rpp: 24,
            },
            display: {
              lang: 'it',
              insertionPoint: '#doofinder-search',
              template: doofinderTemplate,
              results: {
                template: doofinderResultsTemplate,
              },
              facets: {
                shownTerms: 5,
                panelTemplate: doofinderFacetsTemplate,
              },
              templateFunctions: {
                myBold: function() {
                  // the returned function receives the text and
                  // a render function as an argument
                  return function(text: any, render: any) {
                    // you can transform the text before or after
                    // rendering it
                    return '<b>' + render(text) + '</b>'
                  }
                },
              },
              translations: {
                'Sorry, no results found.': 'Sorry, no results found.',
                'not-found-title': 'Ci dispiace, non abbiamo trovato il prodotto che stai cercando...',
                'not-found-subtitle1': 'Non ti preoccupare!',
                'not-found-subtitle2': 'Di seguito alcuni consigli per aiutarti a trovare quello di cui hai bisogno:',
                'not-found-tip1': 'Verifica la tua ortografia e cerca di nuovo',
                'not-found-tip2': 'Prova con un altro termine di ricerca',
                'not-found-tip3': 'Esplora le nostre categorie',
                'View less…': '- Vedi di meno',
                "View more…": "+ Vedi di pi&ugrave;"
              },
            },
            callbacks: {
              loaded: function() {
                let query = window.location.search.substring(1)
                let qs = parse_query_string(query)

                const queryInput: any = document.getElementById('query_input_id')
                if (queryInput) {
                  queryInput.value = qs.q
                }
                var evt = document.createEvent('HTMLEvents')
                evt.initEvent('df:input:valueChanged')
                queryInput.dispatchEvent(evt)
              },
              resultsReceived: function(response: any) {
                test(response, account)
              },
            },
          },
        ]

        account = 'naturitasit-naturitas-doofinder-2-x-';

        break;
    }

    loadScript(
      '//cdn.doofinder.com/media/js/doofinder-embedded.7.latest.min.js',
      function() {}
    )
  } else {
    console.error(
      'Doofinder HashID or Region is empty. Please fill at the APP config in VTEX Admin'
    )
  }
}

function test(result: any, account: any) {
  if (typeof result.facets !== 'undefined') {
    customizarFacetas(result.facets)
  }
  if (typeof result.results !== 'undefined') {
    customizarProductos(result.results, account)
    customGrid(result.results, account)
  }
}

function customizarFacetas(facets: any) {
  if (typeof facets.categories !== 'undefined') {
    if (typeof facets.categories !== 'undefined' && typeof facets.categories.terms.buckets !== 'undefined') {
      facets.categories.terms.buckets.forEach(function(c: any) {
        var term = c['key']
        var termArray = term.split('-')
        var termCustom = termArray[termArray.length - 1]
        if (termCustom.charAt(0) == ' ') {
          termCustom = termCustom.replace(' ', '')
        }

        const quantity: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__count'
        )
        if (quantity) {
          quantity.innerHTML = '(' + c.doc_count + ')'
        }

        const catFac: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__value'
        )
        if (catFac) {
          if (typeof termCustom == 'string') {
            catFac.innerHTML = termCustom
          }
        }

        const wrapper: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__value'
        )
        if (wrapper && quantity) {
          wrapper.appendChild(quantity)
        }
      })
    }
    if (typeof facets.brand !== 'undefined' && typeof facets.brand.terms.buckets !== 'undefined') {
      facets.brand.terms.buckets.forEach(function(c: any) {
        var term = c['key']
        const quantity: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__count'
        )
        if (quantity) {
          quantity.innerHTML = '(' + c.doc_count + ')'
        }
        const wrapper: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__value'
        )
        if (wrapper && quantity) {
          wrapper.appendChild(quantity)
        }
      })
    }
    if (typeof facets.flags !== 'undefined' && typeof facets.flags.terms.buckets !== 'undefined') {
      facets.flags.terms.buckets.forEach(function(c: any) {
        var term = c['key']
        const name: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__value'
        )
        if (name) {
          name.innerHTML = term.charAt(0).toUpperCase() + term.slice(1)
        }
        const quantity: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__count'
        )
        if (quantity) {
          quantity.innerHTML = '(' + c.doc_count + ')'
        }
        const wrapper: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__value'
        )
        if (wrapper && quantity) {
          wrapper.appendChild(quantity)
        }
      })
    }
    if (typeof facets.content_format !== 'undefined' && typeof facets.content_format.terms.buckets !== 'undefined') {
      facets.content_format.terms.buckets.forEach(function(c: any) {
        var term = c['key']
        const name: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__value'
        )
        if (name) {
          name.innerHTML = term.charAt(0).toUpperCase() + term.slice(1)
        }
        const quantity: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__count'
        )
        if (quantity) {
          quantity.innerHTML = '(' + c.doc_count + ')'
        }
        const wrapper: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__value'
        )
        if (wrapper && quantity) {
          wrapper.appendChild(quantity)
        }
      })
    }
    if (typeof facets["g:custom_label_1"] !== 'undefined' && typeof facets["g:custom_label_1"].buckets !== 'undefined') {
      facets["g:custom_label_1"].terms.buckets.forEach(function(c: any) {
        var term = c['key']
        const name: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__value'
        )
        if (name) {
          name.innerHTML = term.charAt(0).toUpperCase() + term.slice(1)
        }
        const quantity: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__count'
        )
        if (quantity) {
          quantity.innerHTML = '(' + c.doc_count + ')'
        }
        const wrapper: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__value'
        )
        if (wrapper && quantity) {
          wrapper.appendChild(quantity)
        }
      })
    }
    if (typeof facets["g:custom_label_2"] !== 'undefined' && typeof facets["g:custom_label_2"].terms.buckets !== 'undefined') {
      facets["g:custom_label_2"].terms.buckets.forEach(function(c: any) {
        var term = c['key']
        const name: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__value'
        )
        if (name) {
          name.innerHTML = term.charAt(0).toUpperCase() + term.slice(1)
        }
        const quantity: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__count'
        )
        if (quantity) {
          quantity.innerHTML = '(' + c.doc_count + ')'
        }
        const wrapper: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__value'
        )
        if (wrapper && quantity) {
          wrapper.appendChild(quantity)
        }
      })
    }
    if (typeof facets['reviews_score'] !== 'undefined' && typeof facets['reviews_score'].terms.buckets !== 'undefined') {
      facets['reviews_score'].terms.buckets.forEach(function(c: any) {
        var term = c['key']
        const quantity: any = document.querySelector(
          '.df-term[data-value="' + term + '"] span.df-term__count'
        )
        if (quantity) {
          quantity.innerHTML = '(' + c.doc_count + ')'
        }
      })
    }
  }
}

function customizarProductos(products: any, account: any) {
  products.forEach(function(p: any) {
    var aux = p.subtitle
    var namePrint = p.title.replace('- ' + aux, '')
    var ele: any = document.querySelector(
      "." + account + "df-card__title[data-title='" +
        p.id +
        "']"
    )
    var eleSubtitle: any = document.querySelector(
      ".subtitle[data-title='" + p.id + "']"
    )
    if (ele) {
      ele.innerHTML = namePrint
    }
    if (eleSubtitle) {
      eleSubtitle.innerHTML = aux
    }

    var auxPrice = p['price']
      .toFixed(2)
      .toString()
      .replace('.', ',')
    var auxOldPrice = p['g:original_price']

    var elePriceOriginal: any = document.querySelector(
      ".original-price[data-id='" + p.id + "']"
    )
    if (elePriceOriginal) {
      elePriceOriginal.innerHTML = auxPrice + ' €'
    }

    if (auxPrice == auxOldPrice) {
      var eleprice: any = document.querySelector(
        "." + account + "df-card__pricing[data-id='" + p.id + "'] ." + account + "df-card__price--old"
      )
      if (eleprice) {
        eleprice.innerHTML = ''
      }

      var queryDescuento: any = document.querySelector(
        ".discounts[data-id='" + p.id + "'] .discounts-container"
      )
      if(queryDescuento) {
        queryDescuento.parentNode.remove();
      }
    } else {
      var descuento = (
        100 -
        (parseFloat(auxPrice.replace(',', '.')) * 100) /
          parseFloat(auxOldPrice.replace(',', '.'))
      ).toFixed(0)

      var queryDescuento: any = document.querySelector(
        ".discounts[data-id='" + p.id + "'] .discounts-container"
      )

      if (queryDescuento && descuento && parseInt(descuento) >= 10) {
        queryDescuento.innerHTML = '-' + descuento + '%';
      } else {
        queryDescuento.parentNode.remove()
      }
    }

    var auxNotBrand = 'Not or Bad Specified Brand'
    var elebrand: any = document.querySelector(
      ".df-card__brand[data-id='" + p.id + "']"
    )
    if (p.brand == auxNotBrand) {
      if (elebrand) {
        elebrand.innerHTML = ''
      }
    } else if (elebrand) {
      elebrand.innerHTML = p.brand
    }

    if (
      typeof p.reviews_data !== 'undefined' &&
      typeof p.reviews_data != null &&
      p.reviews_data != null
    ) {
      if (p.reviews_data.length) {
        var elevaloracion: any = document.querySelector(
          ".valoracion-product[data-id='" + p.id + "']"
        )
        if (elevaloracion) {
          elevaloracion.classList.add('with-review')
          var auxReviews = JSON.parse(p.reviews_data)
          var porcentaje =
            (100 * parseFloat(auxReviews['reviews_score'])) / 5 - 1
          var aux: any = document.querySelector(
            ".valoracion-product[data-id='" + p.id + "'] .porcentaje"
          )
          aux.setAttribute('style', 'width: ' + porcentaje + '%')
          var auxQuantity = auxReviews['reviews_number']
          var eleauxQuantity: any = document.querySelector(
            ".valoracion-product[data-id='" +
              p.id +
              "'] .porcentaje .quantity-porcentaje"
          )
          eleauxQuantity.innerHTML = '(' + auxQuantity + ')'
        }
      }
    }

    const button: any = document.querySelector(
      ".btn.btn-primary.addToCart[data-id='" + p.id + "']"
    )
    if (button) {
      button.addEventListener(
        'click',
        function() {
          customAddToCart(p.id, button, event)
        },
        false
      )
    }
  })
}

function customAddToCart(id: any, button: any, event: any) {
  event.stopPropagation()
  event.preventDefault()

  var promResuelta = Promise.resolve(window.__addTocart(id))

  promResuelta
    .then(function() {
      if (
        button.classList.contains('add-to-cart-loader') &&
        !button.classList.contains('add-to-cart-isadded') &&
        button.nextSibling.classList.contains('custom-spinner')
      ) {
        button.classList.remove('add-to-cart-loader')
        button.classList.add('add-to-cart-isadded')
        button.nextSibling.classList.remove('custom-spinner')
      }
    })
    .catch(e => {
      console.log('An error has occurred ' + e)
      if (
        button.classList.contains('add-to-cart-loader') ||
        button.classList.contains('add-to-cart-isadded') ||
        button.nextSibling.classList.contains('custom-spinner')
      ) {
        button.classList.remove('add-to-cart-loader')
        button.classList.remove('add-to-cart-isadded')
        button.nextSibling.classList.remove('custom-spinner')
      }
    })

  if (
    !button.classList.contains('add-to-cart-loader') &&
    !button.nextSibling.classList.contains('custom-spinner')
  ) {
    button.classList.add('add-to-cart-loader')
    button.nextSibling.classList.add('custom-spinner')
  }

  setTimeout(function() {
    if (button.classList.contains('add-to-cart-isadded')) {
      button.classList.remove('add-to-cart-isadded')
    }
  }, 2000)
}

function customGrid(products: any, account: any) {
  if(products.length > 0) {
    var grid: any = document.querySelector("." + account + "df-results")
    if(grid) {
      grid.classList.add('custom-doofinder-grid');
    }
  } else {
    var aside: any = document.querySelector("." + account + "df-aside");
    var main: any = document.querySelector("." + account + "df-main");
    var header: any = document.querySelector("#df-header__vtex-embedded");
    var grid: any = document.querySelector("." + account + "df-results")
    if(grid && aside && main) {
      aside.style.display = "none";
      main.style.width = "100%";
      header.style.display = "none";
      grid.classList.add('no-results-doofinder-grid');
    }
  }
}
