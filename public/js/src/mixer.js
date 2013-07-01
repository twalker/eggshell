/**
 * Mixer of mixins.
 * A utility to copy functionality from mixins to objects.
 */
define(['underscore'], function(lodash){

	// Monkey patch a destination object (i.e. Model.prototype, View.prototype, etc.)
	// by combining member values that are object literals (e.g. events, defaults),
	// functions (e.g. initialize), or arrays (e.g.relations).
	// Heavily inspired by: https://github.com/onsi/cocktail
	function patch(dest){
		var mixins = lodash(arguments).toArray().rest();
		var collisions = {};

		lodash(mixins).each(function(mixin) {
			lodash(mixin).forOwn(function(value, key) {
				if (lodash.isFunction(value)) {
					// methods
					if (dest[key]) {
						collisions[key] = collisions[key] || [dest[key]];
						collisions[key].push(value);
					}
					dest[key] = value;
				} else if (lodash.isPlainObject(value)) {
					// object literals
					dest[key] = lodash.extend({}, value, dest[key] || {});
				} else if(lodash.isArray(value)) {
					// arrays
					dest[key] = value.concat(dest[key] || []);
				} else {
					// primitives (string, date, regex), last in wins!?!
					// mixins should be composed of functions, and rarely use primitives.
					dest[key] = value;
				}
			});
		});

		lodash(collisions).forOwn(function(fnValues, propName) {
			dest[propName] = wrapFuncs(fnValues);
		});
	}

	// creates a wrapped function that invokes an array of functions,
	// in the order given. Returns the last undefined return.
	function wrapFuncs(funcs){
		return function(){
			var that = this,
					args = arguments,
					returnValue;

			lodash(funcs).each(function(value) {
				var returnedValue = lodash.isFunction(value) ? value.apply(that, args) : value;
				returnValue = (returnedValue === undefined ? returnValue : returnedValue);
			});

			return returnValue;
		};
	}

	return {
		/**
		 * Non-destructively copies members to a destination object from source objects.
		 * A simple proxy to lodash.defaults.
		 *
		 * @example
		 * mixer.mixin(MyModel.prototype, modelMixin1, modelMixin2);
		 */
		mixin: lodash.defaults,
		/**
		 * Destructively copies members to a destination object from source objects.
		 * A simple proxy to lodash.extend.
		 *
		 * @example
		 * mixer.assign(MyModel.prototype, modelMixin1, modelMixin2);
		 */
		assign: lodash.assign,
		/**
		 * Monkey patches members from mixins into a destination object,
		 * merging colliding members (methods, object literals, and arrays).
		 * Typically used on Constructor (klass) prototypes when a mixin
		 * includes initialize, events, or other conflicting members.
		 *
		 * @example
		 * mixer.patch(MyModel.prototype, {
		 *  initialize: function(){return "called after MyModel.initialize"},
		 *  defaults: {labels: []}
		 * }, modelMixin2);
		 */
		patch: patch
	};
});
