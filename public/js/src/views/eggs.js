/**
 * Eggs view
 */
define(function(require, exports, module){
	var Backbone = require('backbone'),
		Mustache = require('mustache'),
		mainTemplate = require('text!views/eggs.mustache');

	return Backbone.View.extend({
		className: 'eggs',
		template: Mustache.compile(mainTemplate),
		events: {},

		initialize: function(options){
			this.collection.on('reset', this.render, this);
		},

		render: function(){
			this.$el.html(this.template({eggs: this.collection.toJSON()}));

			return this;
		}
	});
});