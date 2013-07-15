/**
* FetchOnce mixin function for fetching models only once, and re-using the promised
* model on subsequent fetch calls. Inspired by: https://github.com/tbranyen/backbone.cacheit
**/
define(function(require){
	var jQuery = require('jquery'),
		Backbone = require('backbone');
	/**
	 * Fetches a model once, re-using a promise for subsequent calls.
	 * Resolves promises and callbacks with model, json.
	 *
	 * @param  {[Object]} options fetch options with addition of 'reload' to force a new request.
	 * @return {[promise]} promise that resolves with the model instance.
	 *
	 * @example
	 *
	 * // declaratively replace fetch
	 * var OnceModel = Backbone.Model.extend({
	 *   url: '/load-only-once',
	 *   fetch: fetchOnce
	 *});
	 *
	 * // alternatively, mix into prototype, even use a different name
	 * lodash.defaults(OnceModel.prototype, {load: fetchOnce});
	 *
	 * var m = new OnceModel({id:1});
	 * m.fetch().done(function(model){
	 *   console.log('GETs model from the server.')
	 * });
	 *
	 * m.fetch().done(function(model){
	 *   console.log('No xhr, re-uses promise from original fetch.')
	 * });
	 *
	 * TORECONSIDER:
	 * - Add options to callback/resolution to match success/error signature of Backbone?
	 *   currently omitting options argument. (model, response, options)
	 */
	return function fetchOnce(fetchOptions){
			var oldDfr = this._dfrFetch;
			var options = fetchOptions || {};
			var reload = options.reload;

			// return existing promise, unless reload option is used
			if(oldDfr && !reload){
				// ensure optional success/error callbacks get called when re-using promise
				if(options.success) this._dfrFetch.done(options.success);
				if(options.error) this._dfrFetch.fail(options.error);
				return this._dfrFetch.promise();
			}
			this._dfrFetch = new jQuery.Deferred();

			// if the reload option was set to true, and there was a previous deferred,
			// resolve/reject the previous deferrred along with the new one.
			if(oldDfr && reload){
				this._dfrFetch.done(oldDfr.resolve).fail(oldDfr.reject);
			}
			// call original model fetch on model or collection
			var origFetch = Backbone[this instanceof Backbone.Collection ? "Collection" : "Model"].prototype.fetch;
			var req = origFetch.apply(this, arguments);
			req
				.done(function(res){
						// return the model/collection along with raw json response
						this._dfrFetch.resolveWith(this, [this, res]);
					}.bind(this))
				.fail(function(res){
						this._dfrFetch.rejectWith(this, [this, res]);
					}.bind(this));

			return this._dfrFetch.promise();
		};
});
