require([
  'mocha',
  'chai',
  'sinon',
  'backbone'
], function(mocha, chai, sinon, Backbone){

  // setup
  var assert = chai.assert;

  mocha.setup('bdd');

  // re-define Backbone ajax
  describe('`backbone-promises` monkey patches Backbone sync operations to return ES6 promises', function() {
    var server;
    beforeEach(function(){
      server = sinon.fakeServer.create();
      server.autoRespond = true;
    });

    afterEach(function(){
      server.restore();
    });

    describe('Backbone.ajax', function(){

      it('should return ES6 promises', function(){
        var testattr = {hello: 'world'};
        var xhr = Backbone.ajax('/test').then(function(res){
          assert.instanceOf(xhr, Promise);
          assert.deepEqual(res, testattr);
          done();
        });

        server.respondWith('GET', '/test', [
          200, {'Content-Type': 'application/json'}, JSON.stringify(testattr)
        ]);
      });
    });

    describe('Backbone.sync', function(){
      var TestModel = Backbone.Model.extend({
        url: '/testmodel',
      });

      it('should pass the model/collection to promise fulfillments', function(done){
        var testattr = {id:1, name: 'foo'};
        var loadSpy = sinon.spy(),
          successSpy = sinon.spy();

        var m = new TestModel();

        m
          .save({name: 'foo'})
            .then(function(model){
              assert.strictEqual(model, m);
            })
            .then(function(){
              m.save({name: 'updated foo'})
                .then(function(model){
                  assert.equal(model.get('name'), 'updated foo');
              })
            })
            .then(function(){
              m.fetch().then(function(model){
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

      it('should pass the xhr object to promise rejections', function(done){
        var m = new TestModel();
        m
          .save({name: 'foo'}, {url:'/testmodel'})
            .catch(function(xhr){
              assert.equal(xhr.status, 500);
              assert.equal(xhr.responseText, 'ERROR');
              done()
            })

        server.respondWith('/testmodel', [
          500, {'Content-Type': 'application/json'}, 'ERROR'
        ]);

      });
    });


    describe('Backbone.Model.prototype.save', function(){
      var TestModel = Backbone.Model.extend({
        url: '/testmodel',
        validate: function(attrs, options){
          return { name: 'is not valid' };
        }
      });

      it('should reject promise when xhr fails', function(done){
        var m = new TestModel();
        m.save({name: 'broken'}, {wait: true, validate: false}).catch(function(xhr){
          assert.equal(xhr.status, 500);
          assert.equal(xhr.responseText, 'ERROR');
          done();
        });
        server.respondWith('/testmodel', [
          500, {'Content-Type': 'application/json'}, 'ERROR'
        ]);
      });

      it('should still emit `invalid` event when validation fails, but now return rejected promise with model instead of false', function(done){
        var m = new TestModel({name: 'foo'});
        m.on('invalid', function(err){
          done();
        })

        m.save({name: 'not valid'}).catch(function(model){
          assert.strictEqual(model, m);
          assert.equal(model.get('name'), 'invalid');
        });

      });

    });

  });

  // Start runner
  mocha.run();
});
