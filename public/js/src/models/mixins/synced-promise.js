/**
* SyncPromise is a proxy to Backbone.sync that filters the returned deferred.
* It normalizes the default arguments passed to xhr (json, status, jqXHR),
* to match that of success/error callbacks (model, resp, options).
*
* // Instead of:
* foo.save().done(function(json, status, jqXHR){ return "Where's my model?"});
*
* // We have:
* foo.save().done(function(model, res, options){ gotIt(model)});
**/
define(function(require){
	var jQuery = require('jquery'),
		Backbone = require('backbone');

	return function sync(method, model, options){
		var xhr = Backbone.sync(method, model, options);
		return xhr.then(
			function(json, status, jqXhr){
				return jQuery.Deferred().resolve(model, json, options);
			},
			function(json, status, jqXhr){
				return jQuery.Deferred().reject(model, jqXhr, options);
			}
		);
	};
});
