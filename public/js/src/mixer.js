/**
 * Mixer of mixins.
 * A utility to copy functionality from mixins to objects.
 */
define(['underscore'], function(lodash){

	// Monkey patch a klass (Model, View, etc.) by combining member values that are
	// object literals (e.g. events, defaults) and functions (e.g. initialize).
	// Heavily inspired by: https://github.com/onsi/cocktail
	function patch(klass){
		var mixins = lodash(arguments).toArray().rest();
		var collisions = {};

		lodash(mixins).each(function(mixin) {
			lodash(mixin).forOwn(function(value, key) {
				if (lodash.isFunction(value)) {
					// methods
					if (klass.prototype[key]) {
						collisions[key] = collisions[key] || [klass.prototype[key]];
						collisions[key].push(value);
					}
					klass.prototype[key] = value;
				} else if (lodash.isPlainObject(value)) {
					// object literals
					klass.prototype[key] = lodash.extend({}, value, klass.prototype[key] || {});
				} else if(!lodash.has(klass.prototype, key)) {
					// primitives
					// only overwrite primitive members that aren't on prototype
					klass.prototype[key] = value;
				}
			});
		});

		lodash(collisions).each(function(propertyValues, propertyName) {
			klass.prototype[propertyName] = function() {
				var that = this,
						args = arguments,
						returnValue;

				lodash(propertyValues).each(function(value) {
					var returnedValue = lodash.isFunction(value) ? value.apply(that, args) : value;
					returnValue = (returnedValue === undefined ? returnValue : returnedValue);
				});

				return returnValue;
			};
		});
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
		 * Monkey patches members from mixins into a Constructor's prototype (klass),
		 * merging colliding members (methods, and object literals).
		 * Most useful when a mixin includes initialize, events, or other conflicting members.
		 *
		 * @example
		 * mixer.patch(MyModel, {
		 *  initialize: function(){return "called after MyModel.initialize"},
		 *  defaults: {labels: []}
		 * }, modelMixin2);
		 */
		patch: patch
	};
});
