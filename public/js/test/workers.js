require(['mocha', 'chai'
  ], function(mocha, chai){

  // Setup
  var assert = chai.assert;

  mocha.setup('bdd');

  describe("xhr worker", function() {

    it("should create an perform xhr operations thread", function(done){
      var xhr = new Worker('/js/src/workers/xhr.js');
      var egg = {
        "id": "blue",
        "name": "blue",
        "cracked": false
      };

      assert.isObject(xhr);

      xhr.addEventListener('message', function(e){
        console.log(e)
        console.log("Worker returned: " + e.data);
        assert.deepEqual(e.data, egg);

        done()
      });
      xhr.postMessage({get: '/api/eggs/blue'});
      //xhr.postMessage({post: '/api/eggs', data: {'name':'black', cracked: true}});

    });

    it.skip('should fire an error event', function(done){
      var xhr = new Worker('/js/src/workers/xhr.js');
      xhr.addEventListener('error', function(e){
        //console.log('error happened', e);
        //e.message + " (" + e.filename + ":" + e.lineno + ")");
        assert.isTrue(true);
        done()
      });
      xhr.postMessage({url: '/no/exist', method: 'GET'});

    });

    it.skip('could provide an abstracted wrapper around a worker that returns a promise', function(){
      var xhr = new xhrWorker({url: 'foo/bar', method: 'get'});
      xhr.done(function(jmsg){

      });
    })
  });

  // Start runner
  mocha.run();
});
