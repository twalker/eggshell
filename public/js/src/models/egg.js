/**
* module for a egg model
**/
define(function(require){
	var Backbone = require('backbone-associations'),
		Bacon = require('models/bacon');

	var Egg = Backbone.AssociatedModel.extend({
		relations: [
			{
				type: Backbone.One,
				key: 'bacon',
				relatedModel: Bacon
			}
		],

		defaults: {
			id: null,
			name: null,
			cracked: false,
			bacon: undefined
		},

		initialize: function(){

		},
		/*
		//fetchOrCreateRelated: function(key, options, update){
		fetchRelated: function(){
			return 'todo';
		}
		*/


	});

	return Egg;
});
