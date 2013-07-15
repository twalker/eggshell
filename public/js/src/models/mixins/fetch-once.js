/**
* FetchOnce mixin function for fetching models only once, and re-using the promised
* model on subsequent fetch calls. Inspired by: https://github.com/tbranyen/backbone.cacheit
**/
define(function(require){
	var jQuery = require('jquery'),
		Backbone = require('backbone');
	/**
	 * Fetches a model once, re-using a promise for subsequent calls.
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
	 * - support Collection's too? allow the consumer to pass in a fetch function argument or use instanceof
	 * - success to always be fired instead of only once? YAGNI, just use the promise.
	 *     success(model, response, options)
	 *     error(model, response, options)
	 * - Use same signature as success/error? (model, data, options)
	 */
	return function fetchOnce(options){
			var oldDfr = this._dfrFetch;
			var reload = options && options.reload;

			// return existing promise, unless reload option is used
			if(oldDfr && !reload) return this._dfrFetch.promise();

			this._dfrFetch = new jQuery.Deferred();

			// if the reload option was set to true, and there was a previous deferred,
			// resolve/reject the previous deferrred along with the new one.
			if(oldDfr && reload){
					this._dfrFetch.done(oldDfr.resolve).fail(oldDfr.reject);
			}
			// call original model fetch
			var req = Backbone.Model.prototype.fetch.apply(this, arguments);
			req
				.done(function(res){
						// return the model along with raw json response
						this._dfrFetch.resolveWith(this, [this, res]);
					}.bind(this))
				.fail(function(res){
						this._dfrFetch.rejectWith(this, [this, res]);
					}.bind(this));

			return this._dfrFetch.promise();
		};
});
