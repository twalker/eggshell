/**
 * A synchronous xhr webworker.
 *
 * TODO:
 * - trigger error handler when xhr fails
 * - add CORS support for IE:
 *     http://www.kendoui.com/blogs/teamblog/posts/11-10-03/using_cors_with_all_modern_browsers.aspx
 * - support json, text, formdata, passthrough?
 * - support buffer for dataURL
 */
self.addEventListener('message', function(e) {
  var isVerb = /get|post|put|delete|patch/i;
  var verb = Object.keys(e.data).filter(isVerb.test, isVerb)[0];

  request({
    verb: verb.toUpperCase(),
    url: e.data[verb],
    mime: e.data.mime || 'json',
    data: e.data.data || null
  });

  self.close();
});

var mimeMap = {
  form: 'application/x-www-form-urlencoded; charset=utf-8',
  //form: 'multipart/form-data; charset=utf-8'
  json: 'application/json',
  text: 'text/plain'
};

var request = function request(options){
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', onLoad, false);
  xhr.addEventListener('error', onError, false);

  if(options.data !== null && options.mime === 'json'){
    options.data = JSON.stringify(options.data);
  }
  // synchronous xhr since webworker has a thread
  xhr.open(options.verb, options.url, false);
  xhr.setRequestHeader('Content-Type', mimeMap[options.mime]);
  xhr.send(options.data);

}

function onLoad(e){
  //currentTarget, srcElement, target,
  var xhr = e.target,
    resType = xhr.getResponseHeader('content-type'),
    isNotJson = resType && !/json/.test(resType);

  if(xhr.status < 300){
    self.postMessage(isNotJson ? xhr.responseText : JSON.parse(xhr.responseText));
  }
}

function onError(e){
  //var xhr = e.target;
  // console.log('onError hit')
  //e.preventDefault();
  //throw new ErrorEvent('FOO')
  //throw e;
  //throw new Error();
  //self.dispatchEvent('error')
}
/*garbage*/
/*
require(['/bower_components/reqwest/reqwest'], function(req){
  postMessage('HEEEELLLOOO!')
});
*/
//importScripts('/js/vendor/lodash/js/lodash.js');

/*
var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function(){console.log('load', arguments)});
xhr.open('GET', 'noexist', false);
xhr.send()
*/
