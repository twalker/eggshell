/**
 * Initializes the backbone application.
 */
define(function(require){
		var jQuery = require('jquery'),
			Backbone = require('backbone'),
			Egg = require('models/egg'),
			Eggs = require('collections/eggs'),
			CommitsRouter = require('routers/commits'),
			EggsRouter = require('routers/eggs');

	// single page app boot procedure
	var self = {};

	self.init = function(bootdata){

		// Instantiate root view
		var rootView = self.rootView = new Backbone.View({el: jQuery('#content')});

		// initialize router(s)
		new CommitsRouter({ elRoot: rootView.$el });
		new EggsRouter({ elRoot: rootView.$el });

		// Start watching for navigation events
		Backbone.history.start({ pushState: true });

		return self;
	};

	return self;
});
