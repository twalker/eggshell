require([
	'mocha',
	'chai',
	'sinon',
	'mixer',
	'backbone',
	'models/mixins/weight-watcher'
], function(mocha, chai, sinon, mixer, Backbone, weightWatcher){

	// setup
	var assert = chai.assert;

	mocha.setup('bdd');

	describe('weightWatcher model mixin', function() {

		var server;
		beforeEach(function(){
			server = sinon.fakeServer.create();
			server.autoRespond = true;
		});

		afterEach(function(){
			server.restore();
		});

		describe('isFat()', function(){

			it('should be false when fetched by a collection.', function(done){
				var Model = Backbone.Model.extend({});
				var Collection = Backbone.Collection.extend({url: 'fats', model: Model});
				mixer.patch(Model.prototype, weightWatcher);

				var m = new Model({id: 1, name: 'skinny'});
				var c = new Collection([m]);

				c.fetch().done(function(){
					assert.isFalse(m.isFat());
					assert.isFalse(c.get(2).isFat(), 'new models from server should be thin')
					done();
				});

				server.respondWith('GET', 'fats', [
					200, {'Content-Type': 'application/json'}, '[{"id": 1, "name": "skinny"},{"id": 2, "name": "skinny 2"}]'
				]);

			});

			it('should be true when fetched/saved/updated by a model.', function(done){
				var Model = Backbone.Model.extend({url: 'fat'});

				mixer.patch(Model.prototype, weightWatcher);

				var m = new Model({id:1, name: "fats"});
				assert.isFalse(m.isFat());

				m.
					fetch({success: function(){
						assert.isFalse(m.isFat(), 'model.lastSync until after the sync event has fired');
					}})
					.done(function(){
						assert.isTrue(m.isFat());
					});

				server.respondWith('GET', 'fat', [
					200, {'Content-Type': 'application/json'}, '{"id":1, "name": "fats"}'
				]);


				var m2 = new Model();
				var m3 = new Model({id: 2, name: "existing model"});

				assert.isFalse(m3.isFat(), "hmmm, based on syc, nothing else");

				m2.
					save()
					.done(function(){
						assert.isTrue(m2.isFat());
					})
					.then(function(){
						m3.save().done(function(){
							assert.isTrue(m3.isFat());
							done();
						})
					});

				server.respondWith('POST', 'fat', [
					200, {'Content-Type': 'application/json'}, '{"id":1, "name": "fats"}'
				]);
				server.respondWith('PUT', 'fat', [
					200, {'Content-Type': 'application/json'}, '{"id":3, "name": "existing model"}'
				]);

			});

			it('should also set a .lastSync timestamp for debugging', function(done){
				var Model = Backbone.Model.extend({url: 'fat'});
				mixer.patch(Model.prototype, weightWatcher);

				var m = new Model({id:1, name: "fats"});
				assert.isUndefined(m.lastSync);

				m.fetch().done(function(){
					assert.isNumber(m.lastSync);
					done();
				});

				server.respondWith('GET', 'fat', [
					200, {'Content-Type': 'application/json'}, '{"id":1, "name": "fats"}'
				]);
			});

		});

	});

	// Start runner
	mocha.run();
});
