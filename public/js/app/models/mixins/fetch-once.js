/**
* FetchOnce mixin function for fetching a model or collection only once,
* and re-using the promised model/collection on subsequent fetch calls.
* Inspired by: https://github.com/tbranyen/backbone.cacheit but uses ES6 Promises.
*
* @param  {[Object]} options fetch options with addition of 'reload' to force a new request.
* @return {[promise]} promise that resolves with the model, or rejects with the xhr.
*
* @example
*
* // declaratively replace fetch
* var OnceModel = Backbone.Model.extend({
*   url: '/load-only-once',
*   fetch: fetchOnce
*});
*
* // alternatively, mix into prototype, even use a different name
* lodash.defaults(OnceModel.prototype, {load: fetchOnce});
*
* var m = new OnceModel({id:1});
* m.fetch().then(function(model){
*   console.log('GETs model from the server.')
* });
*
* m.fetch().then(function(model){
*   console.log('No xhr, re-uses promise from original fetch.')
* });
*
*
**/
define(function(require){
  var Promise = require('es6-promise'),
    Backbone = require('backbone');
  /* jshint maxcomplexity: 6 */
  return function fetchOnce(fetchOptions){
    var origFetch = Backbone[this instanceof Backbone.Collection ? 'Collection' : 'Model'].prototype.fetch,
        self = this,
        origArgs = arguments,
        oldP = this._pFetch,
        options = fetchOptions || {},
        reload = !!options.reload;

    // return existing promise, unless reload option is used
    if(oldP && !reload){
      // ensure optional success/error callbacks get called when re-using promise
      if(options.success) this._pFetch.then(options.success);
      if(options.error) this._pFetch.catch(options.error);
      return this._pFetch;
    }

    this._pFetch = new Promise(function fullfiller(resolve, reject){
      // if not using backbone-promies, will need to
      // cast original fetch (jQuery Deferred) as a native ES6 Promise
     // e.g. Promise.resolve(origFetch.apply(self, origArgs)).then...;
      origFetch.apply(self, origArgs)
        .then(
          function resolver(res){
            // resolve with the model/collection
            resolve(self);
          },

          function rejecter(xhr){
            // resolve with xhr
            reject(xhr);
          }
        );
    });

    return this._pFetch;
  };
});
