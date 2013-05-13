require(['require', 'mocha', 'chai',
		'jquery', 'underscore','backbone', 'async',
		'models/egg', 'collections/eggs',
		'models/mixins/loadable'
	], function(require, mocha, chai, jQuery, lodash, Backbone, async, Egg, Eggs, loadable){

	// Setup
	var assert = chai.assert;

	mocha.setup('bdd');

	// asyncronous tasks:
	// - fetch breakfasts,
	// - fetch breakfast 1,
	// - fetch related egg if attr exists.
	// - complete with all models
	var Breakfast = Backbone.Model.extend({
		defaults: {
			name: null,
			egg: null
		}
	});

	lodash.extend(Breakfast.prototype, loadable);
	lodash.extend(Egg.prototype, loadable);
	var Breakfasts = Backbone.Collection.extend({
		url: '/api/breakfasts',
		model: Breakfast
	});
	var breakfasts = new Breakfasts();
	var bfId = 1;
	describe('pyramid of doom', function(){


		describe('using loadable', function(){
			it('is a mixin', function(done){

				var onFetched = function onFetched(){
					console.log('onFetched', arguments);
					done();
				};

				breakfasts
					.fetch({
						success: function(collection, response, options){
							var breakfast = collection.get(bfId);
							breakfast
								.load()
								.done(function(model){
									console.log('load', model);
									if(model.has('egg')){
										var egg = new Egg({id: breakfast.get('egg')});
										egg
											.load()
											.then(function(egg){
												onFetched(collection, breakfast, egg);
											});
									} else {
										onFetched(collection, model);
									}
								});
						}
					});
			});
		});

		describe.skip('using Backbone success', function(){
			it('uses arguments instead of scoped vars', function(done){

				var onFetched = function onFetched(){
					console.log('onFetched', arguments);
					done();
				};

				breakfasts
					.fetch({
						success: function(collection, response, options){
							var breakfast = collection.get(bfId);
							breakfast.fetch({
								success: function(model, response, options){
									if(model.has('egg')){
										var egg = new Egg({id: breakfast.get('egg')});
										egg.fetch({
											success: function(model, response, options){
												onFetched(collection, breakfast, model);
											}
										});
									} else {
										onFetched(collection, model);
									}
								}
							});
					}
				});
			});
		});

		describe.skip('using jQuery deferreds', function(){
			it('re-uses scoped variables', function(done){
				var breakfast, egg;
				var onFetched = function onFetched(){
					console.log('onFetched', arguments)
					done();
				};

				breakfasts
					.fetch()
					.then(function(){
						breakfast = breakfasts.get(bfId);
						return breakfast.fetch().promise();
					})
					.then(function(){
						var dfr = new jQuery.Deferred();
						if(breakfast.has('egg')){
							egg = new Egg({id: breakfast.get('egg')});
							egg
								.fetch()
								.done(dfr.resolve);
						} else {
							dfr.resolve();
						}
						return dfr.promise();
					})
					.done(onFetched)

			});

		});

		describe.skip('deferreds mixed with success', function(){
			it('re-uses scoped variables', function(done){
				var breakfast, egg;
				var onFetched = function onFetched(){
					console.log('onFetched', arguments)
					done();
				};

				breakfasts
					.fetch({
						success: function(collection, response, options){
							console.log('work', response)
						}
					})
					.then(function(){
						breakfast = breakfasts.get(bfId);
						return breakfast.fetch().promise();
					})
					.then(function(){
						var dfr = new jQuery.Deferred();
						if(breakfast.has('egg')){
							egg = new Egg({id: breakfast.get('egg')});
							egg
								.fetch()
								.done(dfr.resolve);
						} else {
							dfr.resolve();
						}
						return dfr.promise();
					})
					.done(onFetched)

			});

		});

		describe.skip('using async', function(){


		});
	});

	// Start runner
	mocha.run();
});
