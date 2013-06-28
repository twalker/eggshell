/**
* module for a bacon model
**/
define(function(require){
	var Backbone = require('backbone-associations');

	// TOREVISIT: Needed to extend AssociatedModel
	return Backbone.AssociatedModel.extend({
		urlRoot: '/api/bacon',
		defaults: {
			id: null,
			name: null,
			crispy: false
		},

		initialize: function(){

		}


	});
});
