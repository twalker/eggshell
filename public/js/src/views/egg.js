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
		delegatedName: delegator('upperName'),
		id: delegator('id'),

		initialize: function(options){

		},
		upperName: function(){
			return this.delegatedName(' delagated name');
		},

		render: function(){
			this.$el.html(this.template(this));
			return this;
		}
	});
});