/**
 * Commits view
 */
define(function(require, exports, module){
	var Backbone = require('backbone'),
		Mustache = require('mustache'),
		mainTemplate = require('text!views/commits.mustache');

	return Backbone.View.extend({
		className: 'commits',
		template: Mustache.compile(mainTemplate),
		events: {},

		initialize: function(options){
			this.collection.on('reset', this.render, this);
		},

		render: function(){
			this.$el.html(this.template({models: this.collection.toJSON()}));

			return this;
		}
	});
});