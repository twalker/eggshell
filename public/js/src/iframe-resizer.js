/**
 * Eggs view
 */
define(function(require, exports, module){
  var Backbone = require('backbone'),
    lodash = require('underscore'),
    Mustache = require('mustache'),
    jQuery = require('jquery');

  var Size = Backbone.Model.extend({
    defaults: {
      label: '',
      width: 0,
      height: 0
    }
  });

  var Sizes = Backbone.Collection.extend({model: Size});

  var Resizer = Backbone.View.extend({
    template: require('text!iframe-resizer.mustache'),
    tagName: 'nav',
    className: 'iframe-resizer',
    events: {
      'click a[data-size]': 'onSizeClick',
      'submit form': 'onSubmit'
    },

    initialize: function(options){
      if(!options.target) throw new Error('resizer requires a target element');
      this.target = options.target;

      this.collection = new Sizes([
        {id: 'S', label: 'Small', width: 320, height: 480},
        {id: 'M', label: 'Medium', width: 480, height: 800},
        {id: 'L', label: 'Large', width: 768, height: 1024}
      ]);

    },

    onSizeClick: function(e){
      e.preventDefault();
      console.log('click');
      var id = jQuery(e.currentTarget).data('size');
      var size = this.collection.get(id);

      this.resize(size.get('width'), size.get('height'));
      this.render();

    },

    onSubmit: function(e){
      e.preventDefault();
      var form = e.currentTarget,
        w = form.elements.namedItem('w').value,
        h = form.elements.namedItem('h').value;

      this.resize(w, h);
      this.render();
    },

    resize: function(w, h){
      // TODO: do width/height methods correspond with offsetWidth & height?
      //var $target = jQuery(this.target);
      //$target.width(w);
      //$target.height(h);
      console.log('target', this.target)
      this.target.width = w;
      this.target.height = h;
    },

    render: function(){
      this.$el.html(Mustache.render(this.template, {
        width: this.target.offsetWidth,
        height: this.target.offsetHeight,

        sizes: this.collection.toJSON()
      }));

      return this;
    }
  });

  return Resizer;
});
