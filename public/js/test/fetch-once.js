require([
	'mocha',
	'chai',
	'sinon',
	'underscore',
	'backbone',
	'models/mixins/fetch-once'
], function(mocha, chai, sinon, lodash, Backbone, fetchOnce){

	// setup
	var assert = chai.assert;

	mocha.setup('bdd');

	describe('fetchOnce Model (or Collection) mixin', function() {

		var server;
		beforeEach(function(){
			server = sinon.fakeServer.create();
			server.autoRespond = true;
		});

		afterEach(function(){
			server.restore();
		});

		describe('used as it\s own method. e.g .fetchOnce([fetch options])', function(){

			var OnceModel = Backbone.Model.extend({
				url: '/load-only-once',
				load: fetchOnce
			});

			// althernate style: mixin load method
			//lodash.defaults(OnceModel.prototype, {fetchOnce: fetchOnce});

			it('should make one request, re-using promise on subsequent load calls', function(done){
				server.respondWith('GET', '/load-only-once', [
					200, {'Content-Type': 'application/json'}, '{"id":1}'
				]);
				var loadSpy = sinon.spy(),
					successSpy = sinon.spy();

				var m = new OnceModel();
				m.load({success: successSpy})
					.done(loadSpy);

				m.load({success: successSpy})
					.done(loadSpy);

				m.load()
					.then(function(){
						assert.isTrue(loadSpy.calledTwice);
						assert.isTrue(loadSpy.alwaysCalledWith(m));
						assert.isTrue(successSpy.called);
						assert.isTrue(successSpy.alwaysCalledWith(m));
						assert.equal(server.requests.length, 1);
						done();
					});
			});

			it('should resolve with the model and the raw json response', function(done){
				server.respondWith('GET', '/load-only-once', [
					200, {'Content-Type': 'application/json'}, '{"id":2}'
				]);
				var loadSpy = sinon.spy();

				var m = new OnceModel();
				m.load()
					.done(loadSpy);

				m.load()
					.then(function(){
						assert.isTrue(loadSpy.calledWithExactly(m, {id: 2}));
						done();
					});
			});


			it('should always call success and error callbacks if provided in fetch options', function(done){
				server.respondWith('GET', '/load-only-once', [
					200, {'Content-Type': 'application/json'}, '{"id":1}'
				]);
				var successSpy = sinon.spy();

				var m = new OnceModel();
				m.load({success: successSpy});
				m.load();
				m.load({success: successSpy});
				m.load({success: successSpy})
					.then(function(){
						assert.isTrue(successSpy.calledThrice);
						assert.isTrue(successSpy.alwaysCalledWith(m));
						done();
					});
			});

			it('should also fail promises and error callbacks', function(done){
				server.respondWith('GET', '/load-only-once', [
					500, {'Content-Type': 'application/json'}, 'ERROR'
				]);

				var loadSpy = sinon.spy(),
					failSpy = sinon.spy(),
					errorSpy = sinon.spy();

				var m = new OnceModel();
				var p = m.load({error: errorSpy})
					.done(loadSpy)
					.fail(failSpy);

				 m.load({error: errorSpy})

				p.fail(function(){
						assert.isFalse(loadSpy.called);
						assert.isTrue(errorSpy.calledTwice)
						assert.isTrue(failSpy.called);
						assert.isTrue(failSpy.calledWith(m));
						done();
					});
			});


			it('should support a reload option to force a new request {reload: true}', function(done){
				server.respondWith('GET', '/load-only-once', [
					200, {'Content-Type': 'application/json'}, '{"id":1}'
				]);
				var loadSpy = sinon.spy();

				var m = new OnceModel();
				m.load()
					.done(loadSpy);

				m.load({reload: true})
					.done(loadSpy);

				m.load()
					.then(function(){
						assert.isTrue(loadSpy.calledTwice);
						assert.equal(server.requests.length, 2);
						done();
					});
			});


		});

		describe('as .fetch([options]) replacement', function(){

			var PatchedModel = Backbone.Model.extend({
				url: '/fetch-only-once',
				fetch: fetchOnce
			});

			it('can be used to replace model.fetch', function(done){
				var fetchSpy = sinon.spy();
				server.respondWith('GET', '/fetch-only-once', [
					200, {'Content-Type': 'application/json'}, '{"id":1}'
				]);

				var pModel = new PatchedModel({id:1});
				pModel
					.fetch()
					.done(fetchSpy);

				pModel
					.fetch()
					.done(function(){
						assert.isTrue(fetchSpy.called);
						assert.equal(server.requests.length, 1);
						done()
					});
			});
		});

		describe('used with Collection', function(){

			it('can be used to replace collection.fetch', function(done){
				var OnceCollection = Backbone.Collection.extend({
					url: '/once-collection',
					fetch: fetchOnce
				});
				var fetchSpy = sinon.spy();
				server.respondWith('GET', '/once-collection', [
					200, {'Content-Type': 'application/json'}, '[{"id":1}, {"id":2}]'
				]);

				var col = new OnceCollection();
				col
					.fetch()
					.done(fetchSpy);

				col
					.fetch()
					.done(function(){
						assert.isTrue(fetchSpy.called);
						assert.equal(server.requests.length, 1);
						assert.isTrue(fetchSpy.calledWithExactly(col, [{id: 1}, {id: 2}]));
						done()
					});
			});
		});

	});

	// Start runner
	mocha.run();
});
