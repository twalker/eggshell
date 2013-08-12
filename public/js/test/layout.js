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

      var vwPrimary = new Backbone.View().render();
      var vwSecondary = new Backbone.View().render();

      var layout = new Layout({
        template: layoutTemplate,
        regions: {
          primary: vwPrimary,
          secondary: vwSecondary
        }
      });

      layout.render();

      it('should insert regions specified in constructor options', function(){
        assert.isTrue(jQuery.contains(layout.el, vwPrimary.el));
      });
      it('should place regions in the data-region specified', function(){
        assert.equal(layout.$('[data-region="secondary"] :first-child')[0], vwSecondary.el);
      });

    });

    describe('.render()', function() {
      it('should deserialize/toJSON model on render, like a normal view', function(){
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

        layout.render();

        assert.isTrue(/bar/.test(layout.$('h1#model').text()));
      });

      it('should deserialize/toJSON collection on render, like a normal view', function(){
        var MyCollection = Backbone.Collection.extend({});
        var myCollection = new MyCollection([{name: 'tuco'},{name: 'angel eyes'}, {name: 'blondie'}]);

        var layout2 = new Layout({
          template: layoutTemplate,
          collection: myCollection
        });

        layout2.render();
        assert.isTrue(/tuco/.test(layout2.$('h1#collection').text()));
      });

      it('should use this.templateOptions to use in viewmodel', function(){
        var LayoutExt = Layout.extend({
          templateOptions: {
            showName: false
          }
        });
        var layoutExt = new LayoutExt({
          template: layoutTemplate
        });
        layoutExt.render();

        assert.isTrue(/noname/.test(layoutExt.$('h1#model').text()));
      });

      it('should invoke onPreRender and onPostRender methods if defined on Layout', function(){
        var preRenderSpy = sinon.spy();
        var postRenderSpy = sinon.spy();
        var extendedLayout = new(Layout.extend({
          onPreRender: preRenderSpy,
          onPostRender: postRenderSpy
        }))({template: layoutTemplate});

        extendedLayout.render();

        assert.isTrue(preRenderSpy.called);
        assert.isTrue(postRenderSpy.called);
      });

      it('should allow nested layouts without collisions', function(){
        var parentLayout = new(Layout.extend({
          template: Mustache.compile('<section data-region="clash"></section>')
        }))();

        var nestedLayout = new(Layout.extend({
          template: Mustache.compile('<section data-region="clash"></section>')
        }))();

        var innerChild = new Backbone.View({});
        parentLayout.assignView('clash', nestedLayout);
        nestedLayout.assignView('clash', innerChild);

        parentLayout.render();
        nestedLayout.render();

        assert.strictEqual(parentLayout.getView('clash'), nestedLayout);
        assert.strictEqual(nestedLayout.getView('clash'), innerChild);

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

      it('should allow view assignments even after layout\'s been rendered', function(){
        layout.render();
        layout.assignView('primary', view3);
        assert.isTrue(jQuery.contains(layout.el, view3.el));
      });

      it('should replace the region element when data-region-options=\'{"replace":true}\'', function(){
        var PView = Backbone.View.extend({tagName: 'p'});
        var tertiary = new PView();
        var layout2 = new Layout({
          template: layoutTemplate,
          regions: { tertiary: tertiary.render()}
        });

        layout2.render();

        assert.strictEqual(tertiary.el, layout2.getView('tertiary').el);
        assert.strictEqual(tertiary.el, layout2.$('[data-region="tertiary"]')[0])

      });
    });

    describe('.clearRegion(regionKey)', function(){
      var clickSpy = sinon.spy();
      var changeSpy = sinon.spy();
      var layout = new Layout({template: layoutTemplate});
      var model = new Backbone.Model({});
      var View = Backbone.View.extend({
        initialize: function(){
          this.listenTo(this.model, 'change', this.onChange);
        },
        events: {'click a': 'onClick'},
        onClick: clickSpy,
        onChange: changeSpy,
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
        assert.isTrue(clickSpy.calledOnce);
      });
      it('should remove model event listeners from view', function(){
        assert.isTrue(changeSpy.calledOnce);
      });

    });

    describe('.showRegion(regionKey) , .hideRegion(regionKey)', function(){
      it.skip('should show or hide the specified region', function(){
        assert.isTrue(false)
      })
    });

    describe('.remove()', function() {
      var incSpy = sinon.spy(),
        clickSpy = sinon.spy(),
        removeSpy = sinon.spy();

      var model = new Backbone.Model({});
      var view = new (Backbone.View.extend({remove: removeSpy}))();

      var ExtendedLayout = Layout.extend({
        events: {'click a':'onClick'},
        initialize: function(){
          this.listenTo(this.model, 'change', this.incrementCount);
        },
        incrementCount: incSpy,
        onClick: clickSpy
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
        assert.isTrue(incSpy.calledOnce);
      });
      it('should remove dom event listeners', function(){
        assert.isTrue(clickSpy.calledOnce);
      });
      it('should call remove on assigned views', function(){
        assert.isTrue(removeSpy.called);
      });
    });

  });

  // Start runner
  mocha.run();
});
