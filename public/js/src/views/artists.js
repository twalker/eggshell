/**
 * Artists view
 */
define(function(require, exports, module){
	var Backbone = require('backbone'),
		Mustache = require('mustache'),
		mainTemplate = require('text!views/artists.mustache'),
		jQuery = require('jquery');

	var ArtistsView = Backbone.View.extend({
		className: 'artists',
		template: Mustache.compile(mainTemplate),
		events: {
			'click li': 'onClick'
		},

		initialize: function(options){
			this.listenTo(this.collection, 'sync', this.render);
		},

		onClick: function(e){
			e.preventDefault();
			var id = jQuery(e.currentTarget).data('id');
			var model = this.collection.get(id);
			console.log('click');
			require(['models/artist'], function(Artist){
				window.Artist = Artist;
				console.log('required', Artist);
			});
		},

		render: function(){
			this.$el.html(this.template({
				artists: this.collection.toJSON()
			}));

			return this;
		}
	});

	return ArtistsView;
});