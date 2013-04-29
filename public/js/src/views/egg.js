/**
 * Egg view
 */
define(function(require, exports, module){
	var Backbone = require('backbone'),
		Mustache = require('mustache'),
		mainTemplate = require('text!views/egg.mustache'),
		delegator = require('views/mixins/delegator');

	return Backbone.View.extend({
		className: 'egg',
		template: Mustache.compile(mainTemplate),
		name: delegator('name'),
		id: delegator('id'),

		initialize: function(options){

		},

		render: function(){
			this.$el.html(this.template(this));
			return this;
		}
	});
});