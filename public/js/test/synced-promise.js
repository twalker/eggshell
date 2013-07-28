require([
	'mocha',
	'chai',
	'sinon',
	'jquery',
	'underscore',
	'backbone',
	'models/mixins/synced-promise'
], function(mocha, chai, sinon, jQuery, lodash, Backbone, sync){

	// setup
	var assert = chai.assert;

	mocha.setup('bdd');

	describe('synced promise to decorate Backbone.sync', function() {

		var server, callback;
		beforeEach(function(){
			server = sinon.fakeServer.create();
			server.autoRespond = true;
		});

		afterEach(function(){
			server.restore();
		});

		describe('sync(method, model, options)', function(){

			var TestModel = Backbone.Model.extend({
				url: '/testmodel',
				sync: sync
			});

			it('should normalize the arguments passed to promise resolutions', function(done){
				var testattr = {id:1, name: 'foo'};
				var loadSpy = sinon.spy(),
					successSpy = sinon.spy();

				var m = new TestModel({name: "foo"});

				m
					.save()
						.then(function(model, json, options){
							assert.strictEqual(model, m);
							assert.deepEqual(json, testattr);
						})
						.then(function(){
							m.save({name: "updated foo"})
								.done(function(model, json, options){
									assert.equal(model.get('name'), "updated foo");
							})
						})
						.then(function(){
							m.fetch().done(function(model, json, options){
								assert.strictEqual(model, m);
								done()
							});
						});

				server.respondWith('POST', '/testmodel', [
					200, {'Content-Type': 'application/json'}, JSON.stringify(testattr)
				]);

				server.respondWith('PUT', '/testmodel', [
					200, {'Content-Type': 'application/json'}, JSON.stringify({id:1, name: 'updated foo'})
				]);

				server.respondWith('GET', '/testmodel', [
					200, {'Content-Type': 'application/json'}, JSON.stringify(testattr)
				]);
			});

			it('should normalize the arguments passed to promise rejections', function(done){
				var m = new TestModel({name: "foo"});
				m
					.save({}, { hello: 'world' })
						.fail(function(model, xhr, options){
							assert.strictEqual(model, m);
							console.log(options)
							assert.equal(options.hello, 'world');
							done();
						});

				server.respondWith('GET', '/testmodel', [
					500, {'Content-Type': 'application/json'}, 'ERROR'
				]);

			});

			it('so I can access models using $.when like this:', function(done){
				var m1 = new TestModel({id: 1, name: "foo"});
				var m2 = new TestModel({id: 1, name: "bar"});
				var m3 = new TestModel({id: 1, name: "baz"});

				jQuery
					.when(m1.fetch(), m2.fetch())
					.then(function(f1, f2){
						assert.strictEqual(f1[0], m1);
						assert.strictEqual(f2[0], m2);
					})
					.then(function(){
						m3.fetch().done(function(model){
							assert.strictEqual(model, m3);
						})
					}).done(function(){
						assert.equal(server.requests.length, 3);
						done();
					});

				server.respondWith('GET', '/testmodel', [
					200, {'Content-Type': 'application/json'}, JSON.stringify({id: 1, name: "foo"})
				]);

			});

		});

	});

	// Start runner
	mocha.run();
});
