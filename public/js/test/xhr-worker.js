require(['mocha', 'chai'
  ], function(mocha, chai){

  // Setup
  var assert = chai.assert;

  mocha.setup('bdd');

  describe("xhr worker", function() {

    it("should do stuff", function(){
      var worker = new Worker('/js/src/xhr-worker.js');
      worker.addEventListener('message', function(e){
        console.log(e)
        console.log("Worker said: " + e.data);
        // not firing
      }, false);

      worker.postMessage({name: "tim"});
      assert.isObject(worker);

    });

    it.skip('should provide an abstracted wrapper around a worker that returns a promise', function(){
      var worker = new xhrWorker({url: 'foo/bar', method: 'get'});
      worker.done(function(jmsg){

      });
    })
  });

  // Start runner
  mocha.run();
});
