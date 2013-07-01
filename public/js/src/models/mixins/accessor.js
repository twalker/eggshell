/**
* Model mixin to add accessor method for an attribute (getter and setter).
* Delegates to model.get() or model.set() method depending on whether or not
* a value was provided.
*
* @example
* Backbone.Model.extend({
*   name: accessor('name')
* });
**/
define([], function(){
	return function(attribute) {
		return function(value) {
			if (value) {
				return this.set(attribute, value);
			} else {
				return this.get(attribute);
			}
		};
	};
});