require([
  'mocha',
  'chai',
  'sinon',
  'backbone',
  'mixer'
], function(mocha, chai, sinon, Backbone, mixer){

  // setup
  var assert = chai.assert;

  mocha.setup('bdd');

  describe('mixer', function(){
    var noop = function noop(){};

    describe('.mixin(dest [, source1, source2, …])', function(){
      var Mod, modMixin;

      beforeEach(function(){
        Mod = Backbone.Model.extend({
          defaults: { first: 'sid'}
        });

        modMixin = {
          defaults: {last: 'vicious'},
          playBass: noop
        };

        mixer.mixin(Mod.prototype, modMixin, {rebel: noop});
      });


      it('should copy methods/properties to a destination object from sources', function(){
        assert.isDefined(Mod.prototype.playBass);
        assert.isDefined(Mod.prototype.rebel);
      });

      it('should not overwrite existing members', function(){
        assert.deepEqual(Mod.prototype.defaults, {first:'sid'});

        var bestPunk = {};
        mixer.mixin(bestPunk, {band: 'sex pistols'}, {band: 'the clash'});
        assert.equal(bestPunk.band, 'sex pistols');
      });

    });

    describe('.assign(dest [, source1, source2, …])', function(){
      var Mod, modMixin;

      beforeEach(function(){
        Mod = Backbone.Model.extend({
          defaults: {first: 'sid'}
        });

        modMixin = {
          defaults: {last: 'vicious'},
          playBass: noop
        };

        mixer.assign(Mod.prototype, modMixin, {rebel: noop});
      });

      it('should copy methods/properties to a destination object from sources', function(){
        assert.isDefined(Mod.prototype.playBass);
        assert.isDefined(Mod.prototype.rebel);
      });

      it('should overwrite existing members', function(){
        assert.deepEqual(Mod.prototype.defaults, {last:'vicious'});

        var bestPunk = {};
        mixer.assign(bestPunk, {band: 'sex pistols'}, {band: 'the clash'});
        assert.equal(bestPunk.band, 'the clash');
      });


    });

    describe('.patch(dest [, source1, source2, …])', function(){
      var Mod, modMixin;
      var initSpy, mixinInitSpy;

      beforeEach(function(){
        initSpy = sinon.spy();
        mixinInitSpy = sinon.spy();

        Mod = Backbone.Model.extend({
          defaults: {first: 'sid'},
          initialize: initSpy,
          genre: ['punk']
        });

        modMixin = {
          defaults: {last: 'vicious'},
          playBass: noop,
          initialize: mixinInitSpy,
          genre: ['rock']
        };

        mixer.patch(Mod.prototype, modMixin, {rebel: noop});
      });


      it('should copy methods/functions to a destination object from sources', function(){
        assert.isDefined(Mod.prototype.playBass);
        assert.isDefined(Mod.prototype.rebel);
      });

      it('should merge colliding/existing members (functions, plain objects, and arrays)', function(){
        assert.deepEqual(Mod.prototype.defaults, {first:'sid', last: 'vicious'});
        assert.deepEqual(Mod.prototype.genre.sort(), ['punk', 'rock'].sort());
        var options = {rock: 'hard'};
        new Mod({}, options);

        assert.isTrue(initSpy.called);
        assert.isTrue(mixinInitSpy.called);
        assert.isTrue(initSpy.calledWith({}, options));
        assert.isTrue(mixinInitSpy.calledWith({}, options));

      });

      it('should merge N collisions in their source order', function(){
        var thirdSpy = sinon.spy();

        mixer.patch(Mod.prototype, {initialize: thirdSpy});

        var m = new Mod({});

        assert.isTrue(initSpy.called);
        assert.isTrue(initSpy.calledBefore(mixinInitSpy));

        assert(initSpy.calledOnce);
        assert(initSpy.calledOn(m));

        assert(mixinInitSpy.called);
        assert(mixinInitSpy.calledBefore(thirdSpy));

        assert(thirdSpy.called);
        assert(thirdSpy.calledAfter(mixinInitSpy));
        assert(thirdSpy.calledOn(m));
      });

      it('should not break the prototype chain', function(){
        var parentSpy = sinon.spy(),
          childSpy = sinon.spy(),
          mixSpy = sinon.spy();

        var ParentView = Backbone.View.extend({
          initialize: parentSpy,
          events: {'click':'onParent'}
        });

        var ChildView = ParentView.extend({
          initialize: childSpy,
          events: {'click':'onChild'}
        });

        var viewMix = {
          initialize: mixSpy,
          events: {'submit': 'onMix'}
        };

        mixer.patch(ChildView.prototype, viewMix);

        var view = new ChildView();

        assert.isFalse(parentSpy.called);
        assert.isTrue(childSpy.called);
        assert.isTrue(mixSpy.called);

        assert.deepEqual(ParentView.prototype.events, {'click':'onParent'});
        assert.deepEqual(ChildView.prototype.events, {'click':'onChild', 'submit': 'onMix'});

        delete ChildView.prototype.events;
        delete ChildView.prototype.initialize;
        // child view should now use prototype of parent
        assert.deepEqual(ChildView.prototype.events, ParentView.prototype.events);
        assert.equal(ChildView.prototype.initialize, ParentView.prototype.initialize)

      });

    });

  });

  // Start runner
  mocha.run();
});