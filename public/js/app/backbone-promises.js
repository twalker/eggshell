/**
 * backbone-promises returns ES6 Promises for Backbone.sync operations.
 * @return {Object} monkey-patched Backbone.
 *
 */
import Backbone from 'backbone'
import jquery from 'jquery'
import lodash from 'lodash'
import ajax from 'lib/ajax'

// Explicitly Backbone dependencies
Backbone.$ = jquery;
Backbone._ = lodash;


// Backbone.ajax to return native ES6 promises for ajax calls insead of jQuery.Deferreds
Backbone.origAjax = Backbone.ajax;
Backbone.ajax = ajax;

// Backbone.sync to resolve with models/collections as the settlement argument.
Backbone.origSync = Backbone.sync;
Backbone.sync = function sync(method, model, options){
  return Backbone.origSync(method, model, options)
    .then(function resolveWithModel() { return model});
};

// Model.prototype.save to reject on validity errors, NOT return false.
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

export default Backbone;