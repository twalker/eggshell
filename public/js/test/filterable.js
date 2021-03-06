require(['require', 'mocha', 'chai', 'sinon',
    'backbone',
    'underscore',
    'collections/mixins/filterable'
  ], function(require, mocha, chai, sinon, Backbone, lodash, filterable){

  // Setup
  var assert = chai.assert
  mocha.setup('bdd');

  describe('filterable', function() {
    var MockModel = Backbone.Model.extend({});

    var MockColl = Backbone.Collection.extend({
      model: MockModel
    });

    // mixin the collection with filterable
    lodash.defaults(MockColl.prototype, filterable);

    var mocks = [];
    for(var i = 0; i < 10; i++){
      mocks.push({id: i, name: 'mock number ' + i});
    }

    describe('.addFilter(key, fnFilter, options)', function() {
      it('should allow adding of model filters to a collection', function(){
        var mockCol = new MockColl(mocks);
        var fnIdExists = function(model){
          return model.has('id');
        };
        mockCol.addFilter('idx', fnIdExists);
        assert(mockCol.filters.idx);
        assert.equal(mockCol.filters.idx, fnIdExists)
      });
    });

    describe('.removeFilter(key, options)', function() {
      it('should allow removing of filters that exist on the collection', function(){
        var mockCol = new MockColl(mocks);
        var fnNoop = function(){};
        mockCol.addFilter('noop', fnNoop);
        mockCol.removeFilter('noop', fnNoop);

        assert.isUndefined(mockCol.filters.noop);
      });
    });

    describe('.clearFilters()', function() {
      it('should allow removing of all filters that exist on the collection', function(){
        var mockCol = new MockColl(mocks);
        var fnNoop = function(){};
        mockCol.addFilter('noop', fnNoop);
        mockCol.addFilter('noop2', fnNoop);
        assert.equal(Object.keys(mockCol.filters).length, 2);
        mockCol.clearFilters();

        assert.equal(Object.keys(mockCol.filters).length, 0);
      });
    });

    describe('.filtered()', function() {
      it('should return an array of filtered models', function(){
        var mockCol = new MockColl(mocks);
        var fnIdExists = function(model){
          return model.has('id');
        };
        var fnMoreThan5 = function(model){
          return model.id > 5;
        };
        mockCol.addFilter('idx', fnIdExists);
        mockCol.addFilter('morethan5', fnMoreThan5);

        assert.equal(mockCol.filtered().length, 4);

        var fnNot9 = function(model){
          return model.id !== 9;
        };
        mockCol.addFilter('not9', fnNot9);

        assert.equal(mockCol.filtered().length, 3);

      });

    });

    describe(':filter(models) event', function(done) {
      it('should fire when filtered(), addFilter, or removeFilter is called', function(){
        var eventSpy = sinon.spy();
        var fnNoop = function(){};
        var mockCol = new MockColl(mocks);
        var vw = new Backbone.View({});
        vw.listenTo(mockCol, 'filter', eventSpy);

        mockCol.addFilter('noop', fnNoop);
        mockCol.removeFilter('noop');

        var filtered = mockCol.filtered();

        assert.isTrue(eventSpy.called);
        assert.isTrue(eventSpy.calledWith(filtered));
        assert.isTrue(eventSpy.calledThrice);

      });

      it('should not fire when {silent: true} option is passed to addFilter or removeFilter', function(){
        var eventSpy = sinon.spy();
        var fnNoop = function(){};
        var mockCol = new MockColl(mocks);
        var vw = new Backbone.View({});
        vw.listenTo(mockCol, 'filter', eventSpy);

        mockCol.addFilter('noop', fnNoop, {silent: true});
        mockCol.removeFilter('noop', {silent: true});

        assert.isFalse(eventSpy.called);

      });

    });

  });

  // Start runner
  mocha.run();
});
