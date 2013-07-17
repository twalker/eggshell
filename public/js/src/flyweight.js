/**
 * Flyweight caches instances of constructed objects.
 *
 * An adaptation of Nick Gauthier's Flyweight pattern in:
 * Mobile Web Patterns with Backbone.js (http://mobilebbbook.com/)
 *
 */
define(function(require){
	var Flyweight = function Flyweight(constructor, keyfn){
		return function(){
			var key = keyfn.apply(null, arguments);

			// instance exists in cache, return that instance
			if (Flyweight.cache[key]) return Flyweight.cache[key];

			// create a new class but with an empty constructor
			// but the same prototype as the old class
			// and instantiate an instance
			var instance = Object.create(constructor.prototype);

			// then apply the old constructor to the instance with provided arguments
			constructor.apply(instance, arguments);

			// Store to the cache, when we have a truthy key
			if(key) Flyweight.cache[key] = instance;

			return instance;
		};
	};

	// memory cache of all instances, for all flyweighted klasses
	Flyweight.cache = {};

	return Flyweight;
});
