/**
* module for a egg model
**/
define(function(require){
	var Backbone = require('backbone-relational'),
		Bacon = require('models/bacon');

	var Egg = Backbone.RelationalModel.extend({
		relations: [
			{
				type: Backbone.HasOne,
				key: 'bacon',
				relatedModel: Bacon,
				includeInJSON: 'id',
				autoFetch: true
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
