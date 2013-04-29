/**
 * Eggs view
 */
define(function(require, exports, module){
	var Backbone = require('backbone'),
		Mustache = require('mustache'),
		mainTemplate = require('text!views/eggs.mustache'),
		EggView = require('views/egg'),
		jQuery = require('jquery');

	return Backbone.View.extend({
		className: 'eggs',
		template: Mustache.compile(mainTemplate),
		events: {
			'click li': 'onClick'
		},

		initialize: function(options){
			this.listenTo(this.collection, 'sync change', this.render);
		},

		hello: function(){
			return "world";
		},

		crackCount: function(){
			return this.collection.where({cracked: true}).length;
		},

		eggs: function(){
			// Should I provide collections/models as json, NO
			// or through accessor properties. YES
			//  leaning toward model refs.
			return this.collection.models;
		},

		helper: function(){
			return function(text, render){
				return render("hello " + text);
				//return "hello " + text;
			};
		},

		// since we're in a section loop of models on invocation, the context is a model.
		formatDate: function(){
			return function(text, render){
				//console.log('formatDate called within ', this, render(text))
				//var d = new Date(parseInt(render(text), 10));
				var d = new Date(this.get('stamp'));
				return d.toJSON();
			};
		},

		lastStampDate: function(){
			var stamps = this.collection.pluck('stamp').sort();
			return stamps[0];
		},

		show: {'foo': 'bar'},

		onClick: function(e){
			e.preventDefault();
			var id = jQuery(e.currentTarget).data('id');
			var model = this.collection.get(id);
			model.save({cracked: !model.get('cracked'), stamp: Date.now()});
		},

		render: function(){
			this.$el.html(this.template(this));
			console.log('render')
			var egg = this.collection.first();
			var eggView = new EggView({model: egg}).render();

			this.$el.append(eggView.el);

			return this;
		}
	});
});