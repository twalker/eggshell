/**
* Model mixin to add accessor methods to models.
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