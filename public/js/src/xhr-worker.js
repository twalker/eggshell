/**
 * A synchronous xhr webworker.
 *
 * TODO:
 * - error message
 * - add CORS support for IE: http://www.kendoui.com/blogs/teamblog/posts/11-10-03/using_cors_with_all_modern_browsers.aspx
 * - support json, text, formdata, passthrough?
 * - support buffer for dataURL
 */

//postMessage("I\'m working before postMessage(\'ali\').");
/*
require(['/bower_components/reqwest/reqwest'], function(req){
  postMessage('HEEEELLLOOO!')
});
*/
//importScripts('/js/vendor/lodash/js/lodash.js');
self.addEventListener('message', function(e) {
  postMessage("Hi " + e.data.name);
  var options = {
    url: '/',
    method: 'GET',
    mime: 'application/json', //YAGNI?
    body: {}
  };
  for(var p in e.data) options[p] = e.data[p];

  var xhr = new XMLHttpRequest();
  // synchronous xhr since webworker has a thread
  xhr.open(options.method, options.url, false);
  xhr.setRequestHeader('Content-Type', options.mime);
  xhr.send(JSON.stringify(options.body));
  postMessage(JSON.parse(xhr.responseText));

  self.close();
});


