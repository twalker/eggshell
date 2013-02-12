/**
 * Initializes the backbone application.
 */
define(function(require){
		var jQuery = require('jquery'),
			Backbone = require('backbone'),
			Egg = require('models/egg'),
			Eggs = require('collections/eggs'),
			EggsRouter = require('routers/eggs');

	// single page app boot procedure
	var self = {};

	self.init = function(bootdata){

		// Instantiate root view
		var rootView = self.rootView = new Backbone.View({el: jQuery('#content')});

		// initialize router(s)
		new EggsRouter({ elRoot: rootView.$el });

		// Start watching for navigation events
		Backbone.history.start();

		return self;
	};

	return self;
});
