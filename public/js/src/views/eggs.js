/**
 * Eggs view
 */
define(function(require, exports, module){
	var Backbone = require('backbone'),
		Mustache = require('mustache'),
		mainTemplate = require('text!views/eggs.mustache'),
		jQuery = require('jquery');

	return Backbone.View.extend({
		className: 'eggs',
		template: Mustache.compile(mainTemplate),
		events: {
			'click li': 'onClick'
		},

		initialize: function(options){
			this.collection.on('reset change', this.render, this);
		},

		onClick: function(e){
			e.preventDefault();
			var id = jQuery(e.currentTarget).data('id');
			var model = this.collection.get(id);
			model.save({cracked: !model.get('cracked')});
		},

		render: function(){
			this.$el.html(this.template({eggs: this.collection.toJSON()}));

			return this;
		}
	});
});