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

		name: accessor('name'),
		cracked: accessor('cracked'),

		initialize: function(){

		},

		upperName: function(){
			return this.get('name').toUpperCase();
		}
	});

	return Egg;
});