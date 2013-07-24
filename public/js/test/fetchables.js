require([
	'mocha',
	'chai',
	'sinon',
	'underscore',
	'backbone',
	'models/mixins/fetchables'
], function(mocha, chai, sinon, lodash, Backbone, fetchables){

	// setup
	var assert = chai.assert;

	mocha.setup('bdd');

	describe('fetchables mixins', function() {

		var server;
		beforeEach(function(){
			server = sinon.fakeServer.create();
			server.autoRespond = true;
		});

		afterEach(function(){
			server.restore();
		});

		describe('consistentFetch function Model mixin', function(){
			//should normalize the signature of success callbacks, and deferred promises
			it('should resolve with the model and the raw json response', function(done){

				var Model = Backbone.Model.extend({
					url: '/musicians',
					fetch: fetchables.consistentFetch
				});
				var loadSpy = sinon.spy();
				var successSpy = sinon.spy();

				var m = new Model();
				m
					.fetch({success: successSpy})
					.done(loadSpy)
					.done(function(){console.log('fired with', arguments)})
					.then(function(){

						assert.isTrue(loadSpy.calledWithExactly(m, {id: 1}));
						assert.isTrue(successSpy.calledWithExactly(m, {id: 1}));
						done();
					});

				server.respondWith('GET', '/musicians', [
					200, {'Content-Type': 'application/json'}, '{"id":1}'
				]);

			});

		});

	});

	// Start runner
	mocha.run();
});
