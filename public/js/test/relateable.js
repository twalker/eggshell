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
					b: [1,2,3]
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

				var promises = model.fetchAllRelated();
				assert.isArray(promises);
				assert.equal(promises.length, 2);
				jQuery
					.when(promises)
					.then(function(a, b){
						console.log('returns', a)
						//assert.isTrue(a[0] instanceof ModelA);
						done();
					});

			});
		});



	});

	// Start runner
	mocha.run();
});
