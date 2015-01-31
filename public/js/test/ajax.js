import {assert} from 'chai'
import sinon from 'sinon'
import {Promise} from 'es6-promise'
import ajax from '../src/ajax'

describe('ajax', function(){
  var server;

  beforeEach(function(){
    server = sinon.fakeServer.create();
    server.autoRespond = true;
  });

  afterEach(function(){
    server.restore();
  });
  console.log('Prom', Promise)
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
//export default function run(){ global.mocha.run(); }