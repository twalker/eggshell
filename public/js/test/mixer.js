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

		describe('.patch(klass [, source1, source2, …])', function(){
			var Mod, modMixin;
			var initSpy, mixinInitSpy;

			beforeEach(function(){
				initSpy = sinon.spy();
				mixinInitSpy = sinon.spy();

				Mod = Backbone.Model.extend({
					defaults: {first: 'sid'},
					initialize: initSpy
				});

				modMixin = {
					defaults: {last: 'vicious'},
					playBass: noop,
					initialize: mixinInitSpy
				};

				mixer.patch(Mod, modMixin, {rebel: noop});
			});


			it('should merge methods/properties to a destination object from sources', function(){
				assert.isDefined(Mod.prototype.playBass);
				assert.isDefined(Mod.prototype.rebel);
			});

			it('should merge colliding/existing members', function(){
				assert.deepEqual(Mod.prototype.defaults, {first:'sid', last: 'vicious'});
				var options = {rock: 'hard'};
				new Mod({}, options);

				assert.isTrue(initSpy.called);
				assert.isTrue(mixinInitSpy.called);
				assert.isTrue(initSpy.calledWith({}, options));
				assert.isTrue(mixinInitSpy.calledWith({}, options));
			});

			it('should merge N collisions in their source order', function(){
				var thirdSpy = sinon.spy();

				mixer.patch(Mod, {initialize: thirdSpy});

				var m = new Mod({});

				assert.isTrue(initSpy.called);
				assert.isTrue(initSpy.calledBefore(mixinInitSpy));

				assert(initSpy.calledOnce);
				assert(initSpy.calledOn(m));

				assert(mixinInitSpy.called);
				assert(mixinInitSpy.calledBefore(thirdSpy));

				assert(thirdSpy.called);
				assert(thirdSpy.calledAfter(mixinInitSpy));
			});
		});

	});

	// Start runner
	mocha.run();
});