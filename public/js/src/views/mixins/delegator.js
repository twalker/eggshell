/**
* View mixin that delegates a method (or property) to it's
* bound model (or collection).
*
* @example
* Backbone.View.extend({
*   count: delegator('size')
*   // which is the equivelant of:
*   count: function(){
*     return this.collection.size();
*   }
* });
**/
define(function(require){
  var lodash = require('underscore');
  return function(member) {
    return function() {
      var obj = this.model || this.collection;
      var method = obj[member];
      // return model's function or property
      return (lodash.isFunction(method)) ? method.apply(obj, arguments) : method;
    };
  };
});
