/**
 * Artists router is the controller for artists.
*/
define(function(require){
	var Backbone = require('backbone'),
		jQuery = require('jquery'),
		Artists = require('collections/artists'),
		ArtistsView = require('views/artists');

	return Backbone.Router.extend({
		routes: {
			'artists': 'list'
		},

		initialize: function(options){
			this.elRoot = options.elRoot;
		},

		list: function(){

			var artists = new Artists();
			var artistsView = new ArtistsView({collection: artists});
			this.elRoot.html(artistsView.el);

			artists.fetch();

		}


	});
});

