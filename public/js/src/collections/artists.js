/**
 * Artists collection.
 */
define(function(require){
	var Backbone = require('backbone'),
		Artist = require('models/artist'),
		fetchOnce = require('models/mixins/fetch-once');

	var Artists = Backbone.Collection.extend({
		url: function(){
			return '/api/artists';
		},

		model: function(attrs, options){
			//console.log('from collection', Artist.all().size())
			return Artist.create(attrs, options);
		}

		//fetch: fetchOnce // not working since we keep constructing a new one.

	});

	return Artists;
});