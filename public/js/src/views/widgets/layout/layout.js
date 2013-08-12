/**
 * @module Layout is a composite view of child views
 * which are assigned to regions defined in the Layout's template
 * denoted with `data-region="keyname"` attributes.
 * These attributes correspond with a region property with a subview reference.
 * Views can be assigned at instantiation or after.
 * Like a faithful parent, Layout cleans up after it's child views.
 *
 * TODO:
 * - revisit hasRendered implentation
 * - think about layoutable as mixin
 *
 * @example
 * var myTemplate = '<p data-region="primary"><!-- view element injected here --></p>';
 *     + '<div data-region="secondary"></div>';
 * var view1 = new Backbone.View(),
 *     view2 = new Backbone.View(),
 *     view3 = new Backbone.View();
 *
 * var myLayout = new Layout({
 *   template: myTemplate,
 *     regions: {
 *       primary: view1,
 *       secondary: view2
 *   }
 * });
 *
 * view1.render();
 * myLayout.render();
 * view2.render();
 *
 * // swap view1 for view3--view1 will be removed.
 * myLayout.assignView('primary', view3).render();
  */
define(function(require){
  var jQuery = require('jquery')
    , lodash = require('underscore')
    , Backbone = require('backbone')
    , Mustache = require('mustache');

  var Layout = Backbone.View.extend({
    constructor: function Layout(options){
      // compiled template expected by subclass or instances
      if(options && options.template) this.template = Mustache.compile(options.template);
      // create references to the view assigned to each region.
      this.regions = {};
      if(options && options.regions){
        lodash.forOwn(options.regions, function(view, key){
          this.assignView(key, view);
        }, this);
      }

      // track whether or not the template has been rendered
      this.hasRendered = false;

      Backbone.View.apply(this, arguments);

      return this;
    },

    // show a specific region
    showRegion: function(regionKey){
      this.$('[data-region=' + regionKey + ']').show();
      return this;
    },

    // hide a specific region
    hideRegion: function(regionKey){
      this.$('[data-region=' + regionKey + ']').hide();
      return this;
    },

    // assigns a view to a region, removes pre-existing view if one exists.
    assignView: function(regionKey, view){
      //console.log('assignView', regionKey, view);
      var previousView = this.regions[regionKey];
      if(previousView && previousView !== view) this.clearRegion(regionKey);
      // assign to region
      this.regions[regionKey] = view;

      // insert the view into the dom immediately if this layout has already rendered.
      if(this.hasRendered){
        this._inject(regionKey, view);
      }
      return view;
    },

    _inject: function(regionKey, view){
      var layoutId = this.cid;
      var elRegion = this.el.querySelector('[data-layoutid=' + layoutId + '][data-region=' + regionKey + ']');
      if(!elRegion) throw new Error(regionKey +' is not a defined region within Layout ' + layoutId);

      var regionOptions = elRegion.dataset.regionOptions ? JSON.parse(elRegion.dataset.regionOptions) : {};
      //console.log(elRegion, regionOptions);

      if(regionOptions.replace){
        this.$(elRegion).replaceWith(view.el);
        view.el.setAttribute('data-region', regionKey);
        view.el.setAttribute('data-layoutid', layoutId);
      } else {
        this.$(elRegion).html(view.el);
      }
      //return view;
    },


    // convenience method for getting a view assigned to a region
    getView: function(regionKey){
      return this.regions[regionKey];
    },

    // cleanup existing views for a the region
    clearRegion: function(regionKey){
      var view = this.regions[regionKey];
      if(view){
        view.remove();
      }
      this.regions[regionKey] = null;
      return this;
    },

    // removes views in regions and self
    remove: function(){
      // loop through child views and call remove, or do it for them
      lodash.forOwn(this.regions, function(view, key){
        this.clearRegion(key);
      }, this);

      // remove self
      Backbone.View.prototype.remove.call(this);
      this.hasRendered = false;
      return this;
    },

    // add all the view.els to their places in the dom,
    // needs to happen after the template has been applied.
    insertRegions: function(){
      var regions = this.regions;
      // loop through region object and insert each view.el into $region element
      lodash.forOwn(this.regions, function(view, key){
        if(view){
          this._inject(key, view);
        } else {
          console.info('no views assigned to layout region: '+ name);
        }
      }, this);

      this.hasRendered = true;
      return this;
    },

    // renders self with deserialized model and templateOptions (if implemented),
    // then inserts views into their assigned regions.
    render: function(){
      if(this.onPreRender) this.onPreRender();

      var viewmodel = this.getViewModel();

      this.$el.html(this.template(viewmodel));

      // mark regions for this layout, to avoid naming conflicts with nested layouts.
      [].forEach.call(this.el.querySelectorAll('[data-region]'), function(el){
        el.setAttribute('data-layoutid', this.cid);
      }, this);

      this.insertRegions();

      if(this.onPostRender) this.onPostRender();
      return this;
    },

    // consolidate template options and model/collection attributes into a viewmodel.
    /*jshint -W074*/ // TODO: decrease cyclomatic complexity.
    getViewModel: function(){
      var viewmodel = {};
      if(this.templateOptions){
        // support plain object or a function
        lodash.extend(viewmodel, lodash.isFunction(this.templateOptions) ?
          this.templateOptions() : this.templateOptions);
      }
      if(this.model) {
        lodash.extend(viewmodel, this.model[('deserialize' in this.model) ?
          'deserialize': 'toJSON']());
      }
      if(this.collection) {
        lodash.extend(viewmodel, {models: this.collection[('deserialize' in this.collection) ?
          'deserialize': 'toJSON']()});
      }

      return viewmodel;
    }
  });

  return Layout;
});
