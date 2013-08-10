/**
 * Eggs view
 */
define(function(require, exports, module){
  var Backbone = require('backbone'),
    Mustache = require('mustache'),
    mainTemplate = require('text!views/eggs.mustache'),
    jQuery = require('jquery');

  var EggsView = Backbone.View.extend({
    className: 'eggs',
    template: Mustache.compile(mainTemplate),
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
      this.$el.html(this.template({
        eggs: this.collection.toJSON(),
        crackedCount: this.collection.crackedCount()
      }));

      return this;
    }
  });

  return EggsView;
});