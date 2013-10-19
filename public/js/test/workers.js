require(['mocha', 'chai'
  ], function(mocha, chai){

  // Setup
  var assert = chai.assert;

  mocha.setup('bdd');
  /*
  function send(msg){
    msg = msg || {get: '/api/eggs/blue'};
    var xhr = new Worker('/js/src/workers/xhr.js');
    xhr.addEventListener('message', function(e){console.log('Worker returned: ', e.data)});
    xhr.postMessage(msg);
  }

  send({get: '/api/eggs/blue'});
  send({post: '/api/eggs/', json: {name: 'black', cracked:false}});
  send({put: '/api/eggs/', text: 'foo bar');
  send({post: '/api/eggs/', form: new FormData(elForm));
  // TORESEARCH: xhr.send(new FormData());
  //  see https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Sending_forms_through_JavaScript
  */

  describe('xhr worker is god damn hard to test', function() {

    it('should create and perform xhr operations on it\'s own thread', function(done){
      var xhr = new Worker('/js/src/workers/xhr.js');
      assert.isObject(xhr);

      xhr.addEventListener('message', function(e){
        console.log('Worker returned: ', e.data);
        assert.equal(e.data.id, 'blue');
        done()
      });
      xhr.postMessage({get: '/api/eggs/blue'});

    });

    it('should send json, or formdata', function(){

    });

    it('should parse json but leave other content types alone', function(){

    });

    it('should POST', function(){
      //xhr.postMessage({post: '/api/eggs', data: {'name':'black', cracked: true}});

    });


    it('should PUT', function(){

    });

    it('should PATCH', function(){

    });

    it.skip('should fire an error event', function(done){
      var xhr = new Worker('/js/src/workers/xhr.js');
      xhr.addEventListener('error', function(e){
        //console.log('error happened', e);
        //e.message + ' (' + e.filename + ':' + e.lineno + ')');
        assert.isTrue(true);
        done()
      });

      xhr.postMessage({ get: '/no/exist'});

    });

  });

  // Start runner
  mocha.run();
});
