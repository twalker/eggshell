require(['mocha', 'chai'
  ], function(mocha, chai){

  // Setup
  var assert = chai.assert;

  mocha.setup('bdd');

  describe("xhr worker", function() {

    it("should creat an xhr thread", function(done){
      var worker = new Worker('/js/src/xhr-worker.js');
      worker.addEventListener('message', function(e){
        console.log(e)
        console.log("Worker returned: " + e.data);
        done()
      });
      worker.postMessage({url: '/api/eggs', method: 'GET'});
      //worker.postMessage({url: '/api/eggs', method: 'POST', body: {'name':'black', cracked: true}});
      assert.isObject(worker);

    });

    it.skip('could provide an abstracted wrapper around a worker that returns a promise', function(){
      var worker = new xhrWorker({url: 'foo/bar', method: 'get'});
      worker.done(function(jmsg){

      });
    })
  });

  // Start runner
  mocha.run();
});
