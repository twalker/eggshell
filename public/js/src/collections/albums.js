/**
 * Albums collection.
 */
define(function(require){
	var Backbone = require('backbone'),
		Album = require('models/album');

	var Albums = Backbone.Collection.extend({
		/*
		// url is defined in Artist association.
		url: function(){
			return '/api/artists/' + this.owner.id + '/albums';
		}
		*/
		model: function(attrs, options){
			return Album.create(attrs, options);
		}

	});

	return Albums;
});