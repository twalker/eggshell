require([
  'mocha',
  'chai',
  'iframe'
], function(mocha, chai, iframe){

  // setup
  var assert = chai.assert;

  mocha.setup('bdd');

  describe('iframe', function(){
    var myframe;

    beforeEach(function(){
      myframe = iframe(document.body, {});
    });

    afterEach(function(){
      myframe.remove();
    });

    describe('constructor', function(){
      it('should create an iframe', function(){
        assert.equal(typeof iframe, 'function');
      });
    });

    describe('document', function(){
      it('should provide the iframe\'s document', function(){
        assert.isTrue('document' in myframe);
        myframe.append();
        var doc = myframe.document();
        assert.equal(doc.nodeType, 9);
      });
    });

    describe('window', function(){
      it('should provide the iframe\'s window', function(){
        myframe.append();
        assert.isTrue('window' in myframe);
        var win = myframe.window();
        assert.notEqual(window, win);
        assert.isTrue('location' in win);
      });
    });

    describe('append', function(){
      it('should append the iframe element from the host document', function(){
        myframe.append();
        assert.equal(myframe.el.tagName.toLowerCase(), 'iframe')
        assert.equal(document.querySelector('iframe'), myframe.el);
      });
    });

    describe('remove', function(){
      it('should remove the iframe element from the host document', function(){
        assert.isTrue('remove' in myframe);
        myframe.remove();
        assert.equal(document.querySelector('iframe'), null);
      });
    });

    describe('isAttached', function(){
      it('should report if the iframe element is in the dom', function(){
        assert.isFalse(myframe.isAttached());
        myframe.append();
        assert.isTrue(myframe.isAttached());
        myframe.remove();
        assert.isFalse(myframe.isAttached());
      });
    });

  });

  // Start runner
  mocha.run();
});
