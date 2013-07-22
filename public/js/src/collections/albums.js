/**
 * Albums collection.
 */
define(function(require){
	var Backbone = require('backbone'),
		Album = require('models/album');

	var Albums = Backbone.Collection.extend({
		url: function(){
			return '/api/TODO/albums';
		},

		model: function(attrs, options){
			return Album.create(attrs, options);
		}

	});

	return Albums;
});