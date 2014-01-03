/**
 * Eggs view
 */
define(function(require, exports, module){
  var Backbone = require('backbone'),
    lodash = require('underscore'),
    Mustache = require('mustache'),
    jQuery = require('jquery');

  var EggsView = Backbone.View.extend({
    template: require('text!views/eggs/eggs.mustache'),
    className: 'eggs',
    events: {
      'click li': 'onClick'
    },

    initialize: function(options){
      this.listenTo(this.collection, 'sync', this.render);
    },

    onClick: function(e){
      e.preventDefault();
      var id = jQuery(e.currentTarget).data('id');
      var model = this.collection.get(id);
      model.save({cracked: !model.get('cracked')});
    },

    render: function(){
      this.$el.html(Mustache.render(this.template, {
        eggs: this.collection.toJSON(),
        crackedCount: this.collection.crackedCount()
      }));

      return this;
    }
  });

  return EggsView;
});
