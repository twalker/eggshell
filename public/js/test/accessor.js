require([
  'mocha',
  'chai',
  'backbone',
  'models/mixins/accessor'
], function(mocha, chai, Backbone, accessor){

  // setup
  var assert = chai.assert;

  mocha.setup('bdd');

  describe('accessor(modelAttr)', function() {
    var Mod = Backbone.Model.extend({
      defaults: {
        name: null
      },
      name: accessor('name'),
      aliasedName: accessor('name')
    });
    var model;

    beforeEach(function(){
      model = new Mod({id: 1, name: 'scooby'});
    });

    it('should provide access to .get() for model attribute (getter)', function(){
      assert.equal(model.name(), model.get('name'));
      assert.equal(model.aliasedName(), 'scooby');
    });

    it('should use model .set(value)  when provided a value (setter)', function(){
      model.name('shaggy')
      assert.equal(model.get('name'), 'shaggy');

      model.aliasedName('fred');
      assert.equal(model.get('name'), 'fred');

    });

  });

  // Start runner
  mocha.run();
});
