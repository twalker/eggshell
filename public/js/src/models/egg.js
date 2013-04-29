/**
* module for a egg model
**/
define(function(require){
	var Backbone = require('backbone'),
		lodash = require('underscore'),
		accessor = require('models/mixins/accessor');

	var Egg = Backbone.Model.extend({
		defaults: {
			id: null,
			name: null,
			cracked: false,
			stamp: null
		},

		paths: {
			'new': 'eggs/new',
			'show': 'eggs/{{id}}',
			'settings': 'eggs/{{id}}/settings'
		},

		pathTo: function(key){
			//TOTEST!!
			return lodash.template(this.paths[key], this.toJSON())
		},

		name: accessor('name'),
		cracked: accessor('cracked'),

		initialize: function(){

		},

		upperName: function(suffix){
			return this.name().toUpperCase() + ' color plus ' + suffix;
		}
	});

	return Egg;
});