require(['require', 'mocha', 'chai', 'sinon',
    'backbone',
    'mustache',
    'views/widgets/layout/layout',
    'text!../test/layout-fixture.mustache'
  ], function(require, mocha, chai, sinon, Backbone, Mustache, Layout, layoutTemplate){
  // Setup
  var assert = chai.assert;

  mocha.setup('bdd');

  describe('layout', function() {

    describe('Constructor', function() {
      //options
      var now = new Date();
      var child1 = new Backbone.View({date: new Date(now.setUTCFullYear(2012))}).render();
      var child2 = new Backbone.View({date: new Date(now.setUTCFullYear(2013))}).render();
      var layout = new Layout({
        template: layoutTemplate,
        regions: {
          primary: child1,
          secondary: child2
        }
      });

      layout.render();

      it('should insert regions specified in constructor options', function(){
        assert.ok(jQuery.contains(layout.el, child1.el));
      });
      it('should place regions in the data-region specified', function(){
        assert.equal(layout.$('[data-region="secondary"] :first-child')[0], child2.el);
      });

    });

    describe('.render()', function() {
      // model, options, beforeRender, afterRender
      var MyModel = Backbone.Model.extend({
        defaults: {id: undefined, name: undefined}
      });

      var model = new MyModel({id:1, name: 'bar'});

      var layout = new Layout({
        template: layoutTemplate,
        model: model
      });

      layout.templateOptions = function(){
        return { showName: true };
      };

      it('should deserialize/toJSON model on render, like a normal view', function(){
        layout.render();
        assert.isTrue(/bar/.test(layout.$('h1#model').text()));
      });

      it('should use this.templateOptions to use in viewmodel', function(){
        var LayoutExt = Layout.extend({
          templateOptions: {
            showName: false
          }
        });
        var layoutExt = new LayoutExt({
          template: layoutTemplate,
          model: model
        });
        layoutExt.render();

        assert.isTrue(/noname/.test(layoutExt.$('h1#model').text()));
      });

      var preCalled = false, postCalled = false;
      var extendedLayout = new(Layout.extend({
        onPreRender: function(){preCalled = true;},
        onPostRender: function(){postCalled = true;}
      }))({template: layoutTemplate});

      extendedLayout.render();

      it('should invoke onPreRender and onPostRender methods if defined on Layout', function(){
        assert.isTrue(preCalled && postCalled);
      });

      // collections
      var MyCollection = Backbone.Collection.extend({
        model: MyModel
      });
      var myCollection = new MyCollection([{name: 'tuco'},{name: 'angel eyes'}, {name: 'blondie'}]);


      var layout2 = new Layout({
        template: layoutTemplate,
        collection: myCollection
      });

      it('should deserialize/toJSON collection on render, like a normal view', function(){
        layout2.render();
        assert.ok(/tuco/.test(layout2.$('h1#collection').text()));
      });

    });

    describe('.getView(regionKey)', function() {
      var view = new Backbone.View();
      var view2 = new Backbone.View();

      var layout = new Layout({
        template: layoutTemplate,
        regions: { primary: view}
      });
      layout.render();
      layout.assignView('secondary', view2);

      it('should return the assigned view given the region key', function(){
        assert.strictEqual(view, layout.getView('primary'));
      });
      it('should return the view even it was assigned after rendering', function(){
        assert.strictEqual(view2, layout.getView('secondary'));
      });
    });

    describe('.assignView(regionKey, view)', function() {
      // remove previous views
      var removed = sinon.spy();
      var view1 = new (Backbone.View.extend({remove: removed}))();
      var view2 = new Backbone.View();
      var view3 = new Backbone.View();

      var layout = new Layout({
        template: layoutTemplate,
        regions: { primary: view1}
      });

      it('should call remove on views being replaced with another.', function(){
        layout.assignView('primary', view2);
        assert(removed.called);
      });

      it('should keep the region\'s view reference current', function(){
        assert.equal(layout.getView('primary'), view2);
      });

      it('should allow view assignemts even after layout\'s been rendered', function(){
        layout.render();
        layout.assignView('primary', view3);
        assert.isTrue(jQuery.contains(layout.el, view3.el));
      });

      it('should replace the region element when data-region-options=\'{"replace":true}\'', function(){
        var view4 = new Backbone.View();
        layout.assignView('secondary', view4.render());
        assert.strictEqual(view4.el, layout.getView('secondary').el);
        assert.strictEqual(view4.el, layout.$('[data-region="secondary"]')[0])

      });
    });

    // was destroy view
    describe('.clearRegion(regionKey)', function(){
      var clickCount = 0, changeCount = 0;
      var layout = new Layout({template: layoutTemplate});
      var model = new Backbone.Model({});
      var View = Backbone.View.extend({
        initialize: function(){
          this.listenTo(this.model, 'change', this.onChange);
        },
        events: {'click a': 'onClick'},
        onClick: function(){clickCount++;},
        onChange: function(){changeCount++;},
        render: function(){
          this.$el.html('<a>clicker</a>');
          return this;
        }
      });
      var view = new View({model: model}).render();

      layout.assignView('primary', view);
      layout.render();

      model.set({name: 'bar'});
      layout.$('[data-region="primary"] a').click();

      layout.clearRegion('primary');

      model.set({bar: 'baz'});
      layout.$('[data-region="primary"] a').click();

      it('should remove dom event listeners from view', function(){
        assert.equal(clickCount, 1);
      });
      it('should remove model event listeners from view', function(){
        assert.equal(changeCount, 1);
      });

    });



    describe('.remove()', function() {
      var incCount = 0,
        clickCount = 0,
        removeCalled = false;

      var model = new Backbone.Model({});

      var view = new (Backbone.View.extend({remove: function(){removeCalled = true;}}))();

      var ExtendedLayout = Layout.extend({
        events: {'click a':'onClick'},
        initialize: function(){
          this.listenTo(this.model, 'change', this.incrementCount);
        },
        incrementCount: function(){incCount++;},
        onClick: function(e){clickCount++;}
      });

      var layout = new ExtendedLayout({
        model: model,
        template: layoutTemplate,
        regions: { primary: view}
      });

      layout.render();

      model.set({foo: 'bar'});
      layout.$('a').click();

      layout.remove();

      // fire events a second time after removal
      model.set({bar: 'baz'});
      layout.$('[data-region="tertiary"] a').click();

      it('should remove model listeners', function(){
        assert.equal(incCount, 1);
      });
      it('should remove dom event listeners', function(){
        assert.equal(clickCount, 1);
      });
      it('should call remove on assigned views', function(){
        assert.isTrue(removeCalled);
      });
    });

  });

  // Start runner
  mocha.run();
});
