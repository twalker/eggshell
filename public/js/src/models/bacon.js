/**
* module for a bacon model
**/
define(function(require){
	var Backbone = require('backbone-relational');

	// TOREVISIT: Needed to extend AssociatedModel
	return Backbone.RelationalModel.extend({
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
