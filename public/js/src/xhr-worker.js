//postMessage("I\'m working before postMessage(\'ali\').");
/*
require(['/bower_components/reqwest/reqwest'], function(req){
  postMessage('HEEEELLLOOO!')
});
*/
self.addEventListener('message', function(e) {
  postMessage("Hi " + e.data.name);
  /*
  var xhr = new XMLHttpRequest();
  xhr.open('GET', event.data, false);
  xhr.send();
  postMessage(xhr.responseText);
  */
}, false);

onmessage = function(e){ postMessage('hello')}

self.close();
