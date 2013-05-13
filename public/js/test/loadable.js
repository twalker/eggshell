require(['require', 'mocha', 'chai', 'sinon',
		'jquery', 'underscore','backbone',
		'models/egg', 'collections/eggs',
		'models/mixins/loadable'
	], function(require, mocha, chai, sinon, jQuery, lodash, Backbone, Egg, Eggs, loadable){

	// Setup
	var assert = chai.assert;

	mocha.setup('bdd');

	lodash.extend(Egg.prototype, loadable);

	describe('loadable', function(){


		describe('.load(options)', function(){
			var fakeServer;
			beforeEach(function(){
				fakeServer = sinon.fakeServer.create();
				fakeServer.respondWith('GET', "/api/eggs/brown", [
					200, {'Content-Type': 'application/json'},
					'{"id":"brown","name":"brown","cracked": false}'
				]);
			});

			afterEach(function(){
				fakeServer.restore();
			});


			it('should return a promise resolved with the model', function(done){
				var egg = new Egg({id: 'brown'});
				egg
					.load()
					.then(function(model){
						assert.equal(model, egg);
						done();
					});

				fakeServer.respond();
			});

			it('should throttle fetch calls', function(done){
				var egg = new Egg({id: 'brown'});

				egg
					.load()
					.then(egg.load)
					.then(egg.load)
					.then(egg.load)
					.then(function(){
						assert.equal(fakeServer.requests.length, 1)
						done()
					});

					fakeServer.respond();
			});

			it('should allow a forced fetch with {reload: true}', function(done){
				var egg = new Egg({id: 'brown'});

				egg
					.load()
					.then(egg.load)
					.then(lodash.partial(egg.load, {reload: true}))
					.then(function(){
						assert.equal(fakeServer.requests.length, 2)
						done()
					});

					fakeServer.respond();
			});
		});


	});

	// Start runner
	mocha.run();
});
