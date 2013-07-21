/**
 * Artists collection.
 */
define(function(require){
	var Backbone = require('backbone'),
		Artist = require('models/artist');

	var Artists = Backbone.Collection.extend({
		url: function(){
			return 'api/artists';
		},

		model: function(attrs, options){
			//console.log('from collection', Artist.all().size())
			return Artist.create(attrs, options);
		}

	});

	return Artists;
});