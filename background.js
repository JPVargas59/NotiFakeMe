const VerifiedPages = [
  'http://www.eluniversal.com.mx/',
  'http://www.milenio.com/',
  'https://www.reforma.com/',
  'https://www.eleconomista.com.mx/',
  'https://www.sdpnoticias.com/',
  'http://diario.mx/',
  'http://www.excelsior.com.mx/',
  'https://www.elnorte.com/',
  'https://www.informador.mx/',
  'https://www.proceso.com.mx/',
  'http://www.jornada.unam.mx/ultimas',
  'https://expansion.mx/',
  'https://vanguardia.com.mx/',
  'https://elpais.com/elpais/portada_america.html'
]

function createConditions() {

  var returnArray = [];

  VerifiedPages.forEach(element => {
    returnArray.push(
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: element},
      })
    )
  });

  return returnArray;
}


chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: createConditions(),
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });