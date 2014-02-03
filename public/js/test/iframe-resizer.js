require([
  'mocha',
  'chai',
  'iframe',
  'iframe-resizer'
], function(mocha, chai, iframe, Resizer){

  // setup
  var assert = chai.assert;

  mocha.setup('bdd');

  describe('iframe Resizer view', function(){


    before(function(){
      var myframe = iframe(document.body, {});
      var elTarget = myframe.append();
      elTarget.src = '/client-tests/app';
      elTarget.className = 'target';
      elTarget.style.outline = '1px solid fuchsia';
      //elTarget.style.resize = 'both';
      //elTarget.style.overflow = 'scroll';

      var vw = new Resizer({target: elTarget });
      vw.render();
      document.body.insertBefore(vw.el, elTarget);

      /*
      //http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
      elTarget.addEventListener('resize', function(e){
        console.log('resized!')
      }, false);
    */

    });

    /*
    before(function(){
      var elTarget = document.createElement('div');
      elTarget.className = 'target';
      elTarget.style.border = '1px solid fuchsia';
      elTarget.style.resize = 'both';
      elTarget.style.overflow = 'scroll';

      elTarget.src = '/client-tests/app';
      document.body.appendChild(elTarget);

      var vw = new Resizer({target: elTarget });
      vw.render();
      document.body.appendChild(vw.el);
      elTarget.addEventListener('resize', function(e){
        console.log('resized!')
      }, false);
    });
    */

    it('should construct a view', function(){


    });

  });

  // Start runner
  mocha.run();
});
