require(['mocha', 'chai', 'sinon',
    'es6-promise',
    'ajax'
  ], function(mocha, chai, sinon, Promise, ajax){

  // Setup
  var assert = chai.assert;
  mocha.setup('bdd');

  describe('ajax', function(){
    var server;

    beforeEach(function(){
      server = sinon.fakeServer.create();
      server.autoRespond = true;
    });

    afterEach(function(){
      server.restore();
    });

    it('should cast jQuery.ajax Deferreds as ES6 promises', function(done){
      var testattr = {id:1, name: 'foo'};
      var xhr = ajax('/test').then(function(res){
          assert.instanceOf(xhr, Promise);
          assert.deepEqual(res, testattr);
          done();
        });

      server.respondWith('GET', '/test', [
        200, {'Content-Type': 'application/json'}, JSON.stringify(testattr)
      ]);
    });

  });

  // Start runner
  mocha.run();
});
