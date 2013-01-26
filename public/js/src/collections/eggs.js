/**
 * Eggs collection.
 */
define(function(require){
	var Backbone = require('backbone'),
		Egg = require('models/egg');

	return Backbone.Collection.extend({
		url: function(){
			return 'api/eggs';
		},

		model: Egg

	});
});