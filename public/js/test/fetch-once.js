require(['mocha', 'chai', 'sinon',
  'jquery',
  'underscore',
  'backbone',
  'es6-promise',
  'models/mixins/fetch-once'
], function(mocha, chai, sinon, jQuery, lodash, Backbone, Promise, fetchOnce){


  var assert = chai.assert;
  mocha.setup('bdd');

  describe('fetchOnce Model (or Collection) mixin', function() {

    var server, callback;
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

      // alternate style: mixin load method
      // lodash.defaults(OnceModel.prototype, {fetchOnce: fetchOnce});

      it('should make one request, re-using promise on subsequent load calls', function(done){
        server.respondWith('GET', '/load-only-once', [
          200, {'Content-Type': 'application/json'}, '{"id":1}'
        ]);
        var loadSpy = sinon.spy(),
          successSpy = sinon.spy();

        var m = new OnceModel();
        m.load({success: successSpy})
          .then(loadSpy);

        m.load({success: successSpy})
          .then(loadSpy);

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

      it('should resolve with the model', function(done){
        server.respondWith('GET', '/load-only-once', [
          200, {'Content-Type': 'application/json'}, '{"id":2}'
        ]);
        var loadSpy = sinon.spy();

        var m = new OnceModel();
        m.load()
          .then(loadSpy);

        m.load()
          .then(function(){
            assert.isTrue(loadSpy.calledWithExactly(m));
            done();
          });
      });


      it('should always call success callbacks if provided in fetch options', function(done){
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

      it('should also catch rejected promises and error callbacks', function(done){
        server.respondWith('GET', '/load-only-once', [
          500, {'Content-Type': 'application/json'}, 'ERROR'
        ]);

        var loadSpy = sinon.spy(),
          failSpy = sinon.spy(),
          errorSpy = sinon.spy();

        var m = new OnceModel();

        var p = m
          .load({error: errorSpy}).then(loadSpy)
          .catch(function(xhr){
            assert.isFalse(loadSpy.called);
            assert.isTrue(errorSpy.called);
            //assert.isTrue(errorSpy.calledWith(err))
            //assert.equal(err.constructor, Error);
            assert.isObject(xhr, 'should return the xhr for now')
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
          .then(loadSpy);

        m.load({reload: true})
          .then(loadSpy);

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
          .then(fetchSpy);

        pModel
          .fetch()
          .then(function(){
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
          .then(fetchSpy);

        col
          .fetch()
          .then(function(){
            assert.isTrue(fetchSpy.called);
            assert.equal(server.requests.length, 1);
            assert.isTrue(fetchSpy.calledWithExactly(col));
            done()
          });
      });
    });

    describe('using with jQuery.when and Promise.all', function(){
      var OnceModel = Backbone.Model.extend({
        url: '/load',
        fetch: fetchOnce
      });

      it.skip('should NOT BE USED in a `jQuery.when`', function(done){
        var pSpy = sinon.spy(),
            dSpy = sinon.spy(),
            dSpy2 = sinon.spy();

        server.respondWith('GET', '/load', [
          200, {'Content-Type': 'application/json'}, '{"id":1}'
        ]);

        var pModel = new OnceModel({id:1});
        jQuery.when(jQuery.get('/load', dSpy), pModel.fetch({success: pSpy}), jQuery.get('/load', dSpy2)).then(function(results){
          assert.isTrue(pSpy.calledAfter(dSpy))
          assert.isTrue(pSpy.calledBefore(dSpy2))
          done();
        })

      });

      it('should be thenable in a `Promise.all`', function(done){
        server.respondWith('GET', '/load', [
          200, {'Content-Type': 'application/json'}, '{"id":1}'
        ]);

        var pModel = new OnceModel();
        var pModel2 = new OnceModel();

        Promise
          .all([pModel.fetch(), pModel2.fetch()])
          .then(function(results){
            //console.log('results', results)
            assert.equal(pModel, results[0]);
            assert.equal(pModel2, results[1]);
            done();
        });

      });

    });

  });

  // Start runner
  mocha.run();
});
