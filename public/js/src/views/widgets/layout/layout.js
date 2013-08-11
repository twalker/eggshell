/**
 * @module Layout is a composite view of child views
 * which are assigned to regions defined in the Layout's template
 * denoted with `data-region="name"` attributes.
 * These attributes correspond with a region property that references a subview.
 * Views can be assigned at instantiation or after.
 * Like a faithful parent, Layout cleans up after it's child views.
 *
 * TODO:
 * - finish implementing data-region-options
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
  var jQuery = require('jquery'),
    Backbone = require('backbone'),
    lodash = require('underscore'),
    Mustache = require('mustache');

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
        var regionOptions = !!(view.el.dataset.regionOptions) ? JSON.parse(view.el.dataset.regionOptions) : {};
        var method = regionOptions.replace ? 'replaceWith' : 'html';

        //if(regionOptions.replace) view.el.dataset.region = regionKey;
        if(regionOptions.replace) view.el.dataset.region = regionKey;

        this.$('[data-region=' + regionKey + ']')[method](view.el);
      }
      return view;
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
      this.$('[data-region]').each(function(i, el){
        var $region= jQuery(el),
          name = $region.data('region'),
          regionOptions = !!(el.dataset.regionOptions) ? JSON.parse(el.dataset.regionOptions) : {};

        if(regions[name]){
          $region[regionOptions.replace ? 'replaceWith' : 'html'](regions[name].el);
          //$region.html(regions[name].el);
        } else {
          console.info('no views assigned to layout region: '+ name);
        }
      });
      this.hasRendered = true;
      return this;
    },

    // renders self with deserialized model and templateOptions (if implemented),
    // then inserts views into their assigned regions.
    /*jshint -W074 */ // TODO: reduce cyclomatic complexity.
    render: function(){
      if(this.onPreRender) this.onPreRender();

      // consolidate template options and model (or collection) attributes into a viewmodel.
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

      this.$el.html(this.template(viewmodel));

      this.insertRegions();

      if(this.onPostRender) this.onPostRender();
      return this;
    }
  });

  return Layout;
});
