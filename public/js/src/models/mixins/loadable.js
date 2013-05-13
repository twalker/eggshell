/**
* Loadable mixin for models/collections to re-use previously fetched
* instances via promises.
*
* inspired by:
* https://github.com/tbranyen/backbone.cacheit
*
**/
define(function(require){
	var jQuery = require('jquery'),
		Backbone = require('backbone');

	return {
		load: function(options){
			// Save a reference to the original deferred.
			var oldDfr = this._dfr;
			options = options || {};
			// Return early.
			if(oldDfr && options.reload !== true) return this._dfr.promise();

			// Create a new deferred.
			this._dfr = new jQuery.Deferred();

			// If the reload option was provided and there is an existing deferred,
			// resolve it once the new one has resolved.
			if(options.reload && oldDfr){
				this._dfr.done(oldDfr.resolve);
			}
 			// Call the `fetch` method.
			var req = this.fetch.apply(this, arguments);
			// Once the request has finished, resolve this deferred.
			req.done(function(){
				this._dfr.resolveWith(this, [this]);
			}.bind(this));

			return this._dfr.promise();
		}
	};
});