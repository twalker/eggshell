/**
* module for a commit
**/
define(function(require){
	var Backbone = require('backbone');

	return Backbone.Model.extend({
		defaults: {
			sha: null,
			author: null,
			commit: null
		},

		initialize: function(){

		}


	});
});