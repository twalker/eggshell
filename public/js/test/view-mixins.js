require([
  'mocha',
  'chai',
  'sinon',
  'mixer',
  'jquery',
  'backbone',
  'views/mixins/classy',
  'views/mixins/showable',
  'views/mixins/delegator',
  'views/mixins/ready'
], function(mocha, chai, sinon, mixer, jQuery, Backbone, classy, showable, delegator, ready){

  // setup
  var assert = chai.assert;

  mocha.setup('bdd');

  describe('view mixins', function() {

    describe('classy', function() {
      var View = Backbone.View.extend(classy);
      var view = new View();
      var $fixture = view.$el;

      it('adds css classes', function(){
        view.addClass('hi mom');
        assert($fixture.hasClass('hi mom'));
      });
      it('removes css classes', function(){
        view.removeClass('hi mom');
        assert.isFalse($fixture.hasClass('hi mom'));
      });
      it('toggles css classes off', function(){
        view.toggleClass('mom', false);
        assert.isFalse($fixture.hasClass('mom'));
      });
      it('toggles css classes on', function(){
        view.toggleClass('mom', true);
        assert($fixture.hasClass('mom'));
      });
    });

    describe('showable', function(){
      var View = Backbone.View.extend(showable);

      var view = new View();
      var $fixture = view.$el;

      jQuery(document.body).append(view.$el);


      it('shows the view\'s root element and reports if root element isVisible', function(){
        view.show();
        assert($fixture.is(':visible'));
        assert(view.isVisible());
      });
      it('hides the view\'s root element and reports if root element isVisible', function(){
        view.hide();
        assert.isFalse($fixture.is(':visible'));
        assert.isFalse(view.isVisible());
      });

    });


    describe('ready', function(){
      var initSpy = sinon.spy(),
        renderSpy = sinon.spy(),
        readySpy = sinon.spy(),
        callbackSpy = sinon.spy();

      var View = Backbone.View.extend(ready);

      var View2 = Backbone.View.extend({
        initialize: initSpy,
        render: function(){
          renderSpy();
          return this;
        }

      });

      mixer.patch(View2.prototype, ready);

      var view = new View();
      var view2 = new View2();

      it('should resolve when the view is rendered', function(done){

        view2.ready(callbackSpy).done(readySpy);

        jQuery
          .when(view.ready(), view2.ready())
          .done(function(vw, vw2){
            assert.isTrue(initSpy.called);
            assert.isTrue(renderSpy.called);
            assert.isTrue(readySpy.called);
            assert.isTrue(callbackSpy.called);

            assert.equal(vw, view);
            assert.equal(vw2, view2);
            assert.isTrue(renderSpy.calledBefore(readySpy));

            done();
          }
        );
      });

      var viewReturn = view.render();
      var view2Return = view2.render();
      assert.equal(viewReturn, view);
      assert.equal(view2Return, view2);

    });


    describe('delegator', function() {
      var SweetModel = Backbone.Model.extend({
        modelProp: 'property',
        modelMethod: function(){
          return this.get('name');
        },
        modelAdd: function(a, b){
          return a + b;
        }
      });
      var model = new SweetModel({name: 'foo' });

      var DelagatorView = Backbone.View.extend({
        delProp: delegator('modelProp'),
        delMethod: delegator('modelMethod'),
        delAddFunction: delegator('modelAdd')
      });
      var delView = new DelagatorView({model: model});

      it('should delegate to model properties and methods', function(){
        assert(delView.delProp, 'property');
        assert(delView.delMethod(), 'foo');
        assert(delView.delAddFunction(2,3), 5);
      });

      var SweetCollection = Backbone.Collection.extend({
        name: 'sweetness'
      });
      var collection = new SweetCollection(model);

      var DelCollectionView = Backbone.View.extend({
        name: delegator('name'),
        count: delegator('size'),
        where: delegator('where')
      });
      var delCollectionView = new DelCollectionView({collection: collection});


      it('should delegate to collection properties and methods', function(){
        assert(delCollectionView.name, 'sweetness');
        assert(delCollectionView.count, 1);
        assert(delCollectionView.where({name: 'foo'}), 1);
      });

    });

  });

  // Start runner
  mocha.run();
});
