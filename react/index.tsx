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
          myBold: function() {
            // the returned function receives the text and
            // a render function as an argument
            return function(text:any, render:any) {
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
        }
      }
    }];

    loadScript("//cdn.doofinder.com/media/js/doofinder-embedded.7.latest.min.js", function () { })

  } else {
    console.error("Doofinder HashID or Region is empty. Please fill at the APP config in VTEX Admin");
  }


}

