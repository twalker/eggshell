/**
* module for a campaign model
**/
define(function(require){
	var Backbone = require('backbone');

	return Backbone.Model.extend({
		defaults: {
			id: null,
			name: null,
			cracked: false
		},

		initialize: function(){

		}


	});
});