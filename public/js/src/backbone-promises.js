/**
 * backbone-promises provides ES6 Promises for sync operations.
 * @return {Object} Backbone monkey-patched backbone.
 */
define(['backbone', 'es6-promise', 'ajax'], function(Backbone, Promise, ajax){

  // Backbone.ajax to use native ES6 promises for ajax calls
  Backbone.ajax = ajax;

  // Backbone.sync to resolve with model/collection as the settlement argument.
  var origSync = Backbone.sync;
  Backbone.sync = function sync(method, model, options){
    return Promise.resolve(origSync(method, model, options))
      .then(function(){ return model});
  };

  // Model.prototype.save to return promise rejection on errors, rather than false.
  var origSave = Backbone.Model.prototype.save;
  Backbone.Model.prototype.save = function save(){
    var xhr = origSave.apply(this, arguments);
    // orgSave will have called model.isValid (emitting the 'invalid' event),
    // and sync would have caught xhr errors before this point.
    // Rejecting with model!?
    return (xhr !== false) ? xhr : Promise.reject(this);
  };

  return Backbone;
})
