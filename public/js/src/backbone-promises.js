/**
 * backbone-promises provides ES6 Promises for sync operations.
 * @return {Object} Backbone monkey-patched backbone.
 *
 */
define(['backbone-lib', 'es6-promise'], function(Backbone, Promise){

  // Backbone.ajax to use native ES6 promises for ajax calls
  var origAjax = Backbone.ajax;
  Backbone.ajax = function ajax(){
    return Promise.resolve(origAjax.apply(Backbone.$, arguments));
  }

  // Backbone.sync to resolve with model/collection as the settlement argument.
  var origSync = Backbone.sync;
  Backbone.sync = function sync(method, model, options){
    return Promise.resolve(origSync(method, model, options))
      .then(function resolveWithModel() { return model});
  };

  // Model.prototype.save to reject promise on errors, NOT return false.
  var origSave = Backbone.Model.prototype.save;
  Backbone.Model.prototype.save = function save(){
    var xhr = origSave.apply(this, arguments);
    // By this point, orgSave has usually validated the model (emitting 'invalid' event),
    // and sync would have caught xhr errors (rejecting with xhr, and emitting 'error' event).
    // Rejecting with ModelInvalid error instead of false.
    return (xhr !== false) ? xhr : Promise.reject(new Error('ModelInvalid'));
  };

  return Backbone;
})
