/**
 * backbone-promises returns ES6 Promises for Backbone.sync operations.
 * @return {Object} monkey-patched Backbone.
 *
 */
define(['backbone-lib', 'es6-promise'], function(Backbone, Promise){

  // Backbone.ajax to use native ES6 promises for ajax calls insead of jQuery.Deferreds
  var origAjax = Backbone.ajax;
  Backbone.ajax = function ajax(){
    return Promise.resolve(origAjax.apply(Backbone.$, arguments));
  }

  // Backbone.sync to resolve with models/collections as the settlement argument.
  var origSync = Backbone.sync;
  Backbone.sync = function sync(method, model, options){
    return Promise.resolve(origSync(method, model, options))
      .then(function resolveWithModel() { return model});
  };

  // Model.prototype.save to reject on errors, NOT return false.
  var origSave = Backbone.Model.prototype.save;
  Backbone.Model.prototype.save = function save(){
    var xhr = origSave.apply(this, arguments);
    // By this point, orgSave has typically validated the model (emitting 'invalid' event),
    // and sync would have caught xhr errors (rejecting with xhr, and emitting 'error' event).
    // Rejecting with Model error instead of false.
    return (xhr !== false) ? xhr : Promise.reject(new Error('ModelError'));
  };

  // Model.prototype.destroy to reject on errors, NOT return false.
  var origDestroy = Backbone.Model.prototype.destroy;
  Backbone.Model.prototype.destroy = function destroy(){
    var xhr = origDestroy.apply(this, arguments);
    return (xhr !== false) ? xhr : Promise.reject(new Error('ModelError'));
  };

  return Backbone;
})
