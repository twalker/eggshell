/**
 * Egg view
 */
define(function(require, exports, module){
	var Backbone = require('backbone'),
		Mustache = require('mustache'),
		mainTemplate = require('text!views/egg.mustache'),
		jQuery = require('jquery');

	return Backbone.View.extend({
		className: 'egg',
		template: Mustache.compile(mainTemplate),
		events: {
			'click li': 'onClick'
		},

		initialize: function(options){
			this.listenTo(this.collection, 'sync change', this.render);
		},

		onClick: function(e){
			e.preventDefault();
			this.model.save({cracked: !this.model.get('cracked'), stamp: Date.now()});
		},

		render: function(){
			this.$el.html(this.template(this.model.toJSON()));

			return this;
		}
	});
});