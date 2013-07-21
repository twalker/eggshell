/**
 * Artists router is the controller for artists.
*/
define(function(require){
	var Backbone = require('backbone'),
		jQuery = require('jquery'),
		Artists = require('collections/artists'),
		ArtistsView = require('views/artists'),
		Artist = require('models/artist'),
		ArtistView = require('views/artist');

	return Backbone.Router.extend({
		routes: {
			'artists': 'list',
			'artists/:artist': 'show'
		},

		initialize: function(options){
			this.elRoot = options.elRoot;
		},

		list: function(){

			var artists = new Artists();
			var artistsView = new ArtistsView({collection: artists});
			this.elRoot.html(artistsView.el);

			artists.fetch();

		},

		show: function(id){
			console.log('show', id);
			//var artist = Artist.all().get(id);
			var artist = Artist.create({id: id});
			var artistView = new ArtistView({model: artist});
			this.elRoot.html(artistView.el);

			artist
				.fetch()
				.done(artistView.render.bind(artistView));
		}


	});
});

