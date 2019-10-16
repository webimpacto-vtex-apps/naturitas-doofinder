import { canUseDOM } from 'vtex.render-runtime'
import { doofinderTemplate, doofinderResultsTemplate, doofinderFacetsTemplate } from './components/template'
import { parse_query_string, loadScript } from './utils'

if (canUseDOM) {
  const { __doofHashId__, __doofRegion__ } = window;
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

  if (__doofHashId__ && __doofRegion__) {
    window.dfEmbeddedLayers = [{
      "queryInput": "#query_input_id",
      "hashid": __doofHashId__,
      "zone": __doofRegion__,
      "redirections": {
        "captureForm": true
      },
      mainContainerId: 'vtex-embedded',
      searchParams: {
        rpp: 24
      },
      "display": {
        "lang": 'it',
        "insertionPoint": "#doofinder-search",
        template: doofinderTemplate,
        results: {
          template: doofinderResultsTemplate
        },
        facets: {
          shownTerms: 5,
          panelTemplate: doofinderFacetsTemplate,
        },
        templateFunctions: {
          myBold: function () {
            // the returned function receives the text and
            // a render function as an argument
            return function (text: any, render: any) {
              // you can transform the text before or after
              // rendering it
              return '<b>' + render(text) + '</b>';
            }
          }
        }
      },

      callbacks: {
        loaded: function () {
          let query = window.location.search.substring(1);
          let qs = parse_query_string(query);

          const queryInput: any = document.getElementById("query_input_id");
          if (queryInput) {
            queryInput.value = qs.q;
          }
          var evt = document.createEvent("HTMLEvents");
          evt.initEvent("df:input:valueChanged");
          queryInput.dispatchEvent(evt)
        },
        resultsReceived: function (response: any) {
          test(response)
        }
      }
    }];

    loadScript("//cdn.doofinder.com/media/js/doofinder-embedded.7.latest.min.js", function () { })

  } else {
    console.error("Doofinder HashID or Region is empty. Please fill at the APP config in VTEX Admin");
  }
}

function test(result: any) {
  if (typeof result.facets != "undefined") {
    customizarFacetas(result.facets)
  }
  if (typeof result.results != "undefined") {
    customizarProductos(result.results)
  }
}

function customizarFacetas(facets: any) {
  if (typeof facets.categories != "undefined") {
    if (typeof facets.categories.terms.buckets != "undefined") {
      facets.categories.terms.buckets.forEach(function (c: any) {
        var term = c["key"];
        var termArray = term.split("-");
        var termCustom = termArray[termArray.length - 1];
        if (termCustom.charAt(0) == " ") {
          termCustom = termCustom.replace(" ", "")
        }

        const quantity: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__count');
        if (quantity) {
          quantity.innerHTML = "(" + c.doc_count + ")"
        }

        const catFac: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__value');
        if (catFac) {
          if (typeof termCustom == "string") {
            catFac.innerHTML = termCustom
          }
        }

        const wrapper: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__value');
        if(wrapper && quantity) {
          wrapper.appendChild(quantity);
        }
      })
    }
    if (typeof facets.brand.terms.buckets != "undefined") {
      facets.brand.terms.buckets.forEach(function (c: any) {
        var term = c["key"];
        const quantity: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__count');
        if (quantity) {
          quantity.innerHTML = "(" + c.doc_count + ")"
        }
        const wrapper: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__value');
        if(wrapper && quantity) {
          wrapper.appendChild(quantity);
        }
      })
    }
    if (typeof facets.flags.terms.buckets != "undefined") {
      facets.flags.terms.buckets.forEach(function (c: any) {
        var term = c["key"];
        const name: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__value');
        if (name) {
          name.innerHTML = term.charAt(0).toUpperCase() + term.slice(1);
        }
        const quantity: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__count');
        if (quantity) {
          quantity.innerHTML = "(" + c.doc_count + ")"
        }
        const wrapper: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__value');
        if(wrapper && quantity) {
          wrapper.appendChild(quantity);
        }
      })
    }
    if (typeof facets.content_format.terms.buckets != "undefined") {
      facets.content_format.terms.buckets.forEach(function (c: any) {
        var term = c["key"];
        const name: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__value');
        if (name) {
          name.innerHTML = term.charAt(0).toUpperCase() + term.slice(1);
        }
        const quantity: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__count');
        if (quantity) {
          quantity.innerHTML = "(" + c.doc_count + ")"
        }
        const wrapper: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__value');
        if(wrapper && quantity) {
          wrapper.appendChild(quantity);
        }
      })
    }
    if (typeof facets["reviews_score"].terms.buckets != "undefined") {
      facets["reviews_score"].terms.buckets.forEach(function (c: any) {
        var term = c["key"];
        const quantity: any = document.querySelector('.df-term[data-value="' + term + '"] span.df-term__count');
        if (quantity) {
          quantity.innerHTML = "(" + c.doc_count + ")"
        }
      })
    }
  }
}

function customizarProductos(products: any) {
  products.forEach(function (p: any) {
    var aux = p.subtitle;
    var namePrint = p.title.replace("- " + aux, "");
    var ele: any = document.querySelector(".webimpacto-naturitas-doofinder-0-x-df-card__title[data-title='" + p.id + "']")
    var eleSubtitle: any = document.querySelector(".subtitle[data-title='" + p.id + "']")
    if (ele) {
      ele.innerHTML = namePrint
    }
    if (eleSubtitle) {
      eleSubtitle.innerHTML = aux
    }

    var auxPrice = (p["price"].toFixed(2)).toString().replace(".", ",");
    var auxOldPrice = p["g:original_price"];

    var elePriceOriginal: any = document.querySelector(".original-price[data-id='" + p.id + "']");
    if (elePriceOriginal) {
      elePriceOriginal.innerHTML = auxPrice + " €";
    }

    if (auxPrice == auxOldPrice) {
      var eleprice: any = document.querySelector(".df-card__pricing[data-id='" + p.id + "'] .df-card__price--old");
      if (eleprice) {
        eleprice.innerHTML = "";
      }
    } else {
      var descuento = (100 - ((parseFloat(auxPrice.replace(",", ".")) * 100) / parseFloat(auxOldPrice.replace(",", ".")))).toFixed(0);
      var queryDescuento: any = document.querySelector(".discounts[data-id='" + p.id + "'] .discounts-container");
      if (queryDescuento) {
        queryDescuento.innerHTML = "-" + descuento + "%";
      }
    }


    var auxNotBrand = 'Not or Bad Specified Brand';
    var elebrand: any = document.querySelector(".df-card__brand[data-id='" + p.id + "']");
    if (p.brand == auxNotBrand) {
      if (elebrand) {
        elebrand.innerHTML = "";
      }
    } else if (elebrand) {
      elebrand.innerHTML = p.brand;
    }

    if (typeof p.reviews_data != "undefined" && typeof p.reviews_data != null && p.reviews_data != null) {

      if (p.reviews_data.length) {

        var elevaloracion: any = document.querySelector(".valoracion-product[data-id='" + p.id + "']");
        if (elevaloracion) {
          elevaloracion.classList.add("with-review");
          var auxReviews = JSON.parse(p.reviews_data);
          var porcentaje = (100 * parseFloat(auxReviews["reviews_score"]) / 5) - 1;
          var aux: any = document.querySelector(".valoracion-product[data-id='" + p.id + "'] .porcentaje")
          aux.setAttribute("style", "width: " + porcentaje + "%")
          var auxQuantity = auxReviews["reviews_number"];
          var eleauxQuantity: any = document.querySelector(".valoracion-product[data-id='" + p.id + "'] .porcentaje .quantity-porcentaje")
          eleauxQuantity.innerHTML = "(" + auxQuantity + ")"
        }
      }
    }

    const button: any = document.querySelector(".btn.btn-primary.addToCart[data-id='" + p.id + "']");
    if (button) {
      button.addEventListener("click",function() {
        customAddToCart(p.id, button, event);
      },false);
    }
  })
}

function customAddToCart(id: any, button:any, event: any) {
  console.log('function',id,button,event)
  event.stopPropagation();
  event.preventDefault();

  var promResuelta = Promise.resolve(window.__addTocart(id));

  promResuelta.then(function(){
      if(button.classList.contains("add-to-cart-loader")&& !button.classList.contains("add-to-cart-isadded") && button.nextSibling.classList.contains("custom-spinner")) {
        button.classList.remove("add-to-cart-loader");
        button.classList.add("add-to-cart-isadded");
        button.nextSibling.classList.remove("custom-spinner");
      }
  }).catch(e => {
    console.log("An error has occurred " + e);
    if(button.classList.contains("add-to-cart-loader") || button.classList.contains("add-to-cart-isadded") || button.nextSibling.classList.contains("custom-spinner")) {
      button.classList.remove("add-to-cart-loader");
      button.classList.remove("add-to-cart-isadded");
      button.nextSibling.classList.remove("custom-spinner");
    }
  })

  if(!button.classList.contains("add-to-cart-loader") && !button.nextSibling.classList.contains("custom-spinner")) {
    button.classList.add("add-to-cart-loader");
    button.nextSibling.classList.add("custom-spinner");
  }

  setTimeout(function(){
      if(button.classList.contains("add-to-cart-isadded")) {
        button.classList.remove("add-to-cart-isadded");
      }
  }, 2000);
}