/**
* View mixin to accesss methods on models/collections.
**/
define(['underscore'], function(lodash){
	return function(member) {
		return function() {
			// model or collection?
			var obj = this.model || this.collection;
			var method = obj[member];
			//console.log('args', method, this, obj);
			// return function or attribute
			return (lodash.isFunction(method)) ? method.apply(obj, arguments) : method;
		};
	};
});