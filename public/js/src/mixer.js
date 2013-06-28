/**
 * Mixer of mixins.
 * A utility to copy functionality from mixins to objects.
 */
define(['underscore'], function(lodash){
	// heavily inspired by: https://github.com/onsi/cocktail
	function patch(klass){
		var mixins = lodash(arguments).toArray().rest().flatten().value();
		var collisions = {};

		lodash(mixins).each(function(mixin) {
			lodash(mixin).each(function(value, key) {
				if (lodash.isFunction(value)) {
					if (klass.prototype[key]) {
						collisions[key] = collisions[key] || [klass.prototype[key]];
						collisions[key].push(value);
					}
					klass.prototype[key] = value;
				} else if (lodash.isObject(value)) {
					klass.prototype[key] = lodash.extend({}, value, klass.prototype[key] || {});
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

	};

	return {
		/**
		 * Non-destructively copies members to a destination object from source objects.
		 * A simple proxy to lodash.defaults.
		 * @example
		 * mixer.mixin(MyModel.prototype, modelMixin1, modelMixin2);
		 */
		mixin: lodash.defaults,
		/**
		 * Destructively copies members to a destination object from source objects.
		 * A simple proxy to lodash.extend.
		 * @example
		 * mixer.assign(MyModel.prototype, modelMixin1, modelMixin2);
		 */
		assign: lodash.assign,
		/**
		 * Copies members from mixins to a Constructor (klass), merging colliding
		 * members.
		 * Most useful when a mixin has initialize, event, or defaults.
		 * @example
		 * mixer.patch(MyModel, {
		 *  initialize: function(){return "called after MyModel.initialize"}
		 * }, modelMixin2);
		 */
		patch: patch
	};
});
