define(function(require){
	var jQuery = require('jquery'),
		Backbone = require('backbone');

	var consistentFetch = function consistentFetch(options){
		var dfr = new jQuery.Deferred();
		// call original model fetch on model or collection
		var origFetch = Backbone[this instanceof Backbone.Collection ? "Collection" : "Model"].prototype.fetch;
		origFetch
			.apply(this, arguments)
			.done(function(res){
					// return the model/collection along with raw json response
					dfr.resolveWith(this, [this, res]);
				}.bind(this))
			.fail(function(res){
					dfr.rejectWith(this, [this, res]);
				}.bind(this));

		return dfr.promise();
	};

	return {
		consistentFetch: consistentFetch
	};

});