/**
* module for a egg model
**/
define(function(require){
	var Backbone = require('backbone');

	return Backbone.Model.extend({
		urlRoot: '/api/eggs',
		defaults: {
			id: null,
			name: null,
			cracked: false
		},

		initialize: function(){

		}


	});
});