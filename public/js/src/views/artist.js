/**
 * Artist view
 */
define(function(require, exports, module){
	var Backbone = require('backbone'),
		Mustache = require('mustache'),
		mainTemplate = require('text!views/artist.mustache'),
		nav = require('nav'),
		jQuery = require('jquery');

	var ArtistView = Backbone.View.extend({
		className: 'artist',
		template: Mustache.compile(mainTemplate),

		events: {
			'click a.back': function(e){
				e.preventDefault();
				nav.go(e.currentTarget.getAttribute('href'));
			}
		},

		initialize: function(options){

			//this.listenTo(this.model, 'sync', this.render);
		},

		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return ArtistView;
});