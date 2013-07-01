/**
 * Initializes the backbone application.
 */
define(function(require){
	var jQuery = require('jquery'),
		lodash = require('underscore'),
		Backbone = require('backbone'),
		nav = require('nav'),

		Egg = require('models/egg'),
		Eggs = require('collections/eggs'),
		EggsRouter = require('routers/eggs');


	var self = {
		versions: {
			jquery: jQuery.fn.jquery,
			lodash: lodash.VERSION,
			backbone: Backbone.VERSION
		}
	};

	// single page app boot procedure
	self.init = function(bootdata){

		// Instantiate root view
		var rootView = self.rootView = new Backbone.View({el: jQuery('#content')});

		// initialize router(s)
		new EggsRouter({ elRoot: rootView.$el });

		// Start watching for navigation events
		nav.start();

		// global pushState link handler
		rootView.$el.on('click', 'a[data-pushlink]',	nav.onPushLinkClick.bind(nav));

		return self;
	};

	return self;
});
