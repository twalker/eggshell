require([
	'mocha',
	'chai',
	'sinon',
	'underscore',
	'jquery',
	'backbone',
	'models/mixins/relateable'
], function(mocha, chai, sinon, lodash, jQuery, Backbone, relateable){

	// setup
	var assert = chai.assert;

	mocha.setup('bdd');

	describe('relateable', function() {
		var ModelA = Backbone.Model.extend({defaults: {name: 'a'}, url: '/api/a' });
		var ModelB = Backbone.Model.extend({defaults: {name: 'b'}, url: '/api/b' });
		var ModelC = Backbone.Model.extend({defaults: {name: 'c'}, url: '/api/c' });
		var server;

		beforeEach(function(){
			server = sinon.fakeServer.create();
			server.autoRespond = true;
		});

		afterEach(function(){
			server.restore();
		});

		var Mod = Backbone.Model.extend({
  		relations: [
				{
					key: 'a',
					relatedModel: ModelA
				},
				{
					key: 'b',
					relatedModel: ModelB
				}
				// todo: collection/array/many relation
			],
		});

		// mix relateable into Model's prototype
		lodash.defaults(Mod.prototype, relateable);

		describe('fetchRelated(key)', function(){
			it('should fetch a related model, returning a promise', function(done){
				var fetchSpy = sinon.spy();
				var model = new Mod({
					id: 1,
					a: 1,
					b: 1
				});

				server.respondWith('GET', '/api/a', [
					200, {'Content-Type': 'application/json'}, '{"id":1}'
				]);

				var p = model.fetchRelated('a');
				p.done(fetchSpy);

				p.done(function(aModel){
					assert(fetchSpy.called);
					assert.isTrue(aModel.id == 1);
					assert.isTrue(aModel instanceof ModelA);
					done();
				});

			});
		});

		describe('fetchAllRelated()', function(){
			it('should fetch all related models, returning an array of promises', function(done){
				var fetchSpy = sinon.spy();
				var model = new Mod({
					id: 1,
					a: 1,
					b: [1,2,3]
				});

				server.respondWith('GET', '/api/a', [
					200, {'Content-Type': 'application/json'}, '{"id":1}'
				]);
				server.respondWith('GET', '/api/b', [
					200, {'Content-Type': 'application/json'}, '{"id":1}'
				]);

				var promises = model.fetchAllRelated();
				assert.isArray(promises);
				assert.equal(promises.length, 2);
				jQuery
					.when.apply(jQuery, promises)
					.then(function(a, b){
						assert.isTrue(a instanceof ModelA);
						assert.isTrue(b instanceof ModelB);
						done();
					});

			});
		});

		describe('Model.all collection', function(){
			it('should be a collection to store/cache all instances', function(){
				var fetchSpy = sinon.spy();
				var AllModel = Backbone.Model.extend({
					constructor: function(attr, options){
						var all = this.constructor.all;
						//var instance;
						if(all.get(attr.id)){
							 return all.get(attr.id).set(attr);
						} else {
							// TODO: how do I get a new model into the collection

							//var instance = Object.create(Backbone.Model.prototype);
							//Backbone.Model.apply(instance, arguments);

							 //return all.create(attr, options)

							// Backbone.Model.apply(this, arguments);
							// console.log('this', this instanceof Backbone.Model, instance)
							 //this.once('sync', all.add, all);
							 //return instance;
							//Backbone.Model.apply(this, arguments);
							Backbone.Model.apply(this, arguments)
							this.once('sync', all.add, all);
							console.log(this)
						}

					}
				}, {
					all: new Backbone.Collection(/*{model: AllModel}*/)
				});
				//AllModel.all = new Backbone.Collection({model: AllModel});

				AllModel.all.reset([{id:'a', name:'a'}, {id:'b', name:'b'}]);

				var modelA = new AllModel({id: 'a'});
				var modelC = new AllModel({id: 'c'});
				console.log('a', modelA);
				console.log('c', modelC)

				assert.equal(AllModel.all.size(), 2);
				// return the same reference from constructor
				assert.equal(AllModel.all.get('a'), modelA);
				// will add it to the collection if it doesn't exist
				assert.equal(AllModel.all.get('c'), modelC);
			});
		});



	});

	// Start runner
	mocha.run();
});
