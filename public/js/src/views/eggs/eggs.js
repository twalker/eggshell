/**
 * Eggs view
 */
import Backbone from '../../backbone-extended'
import Mustache from 'mustache'
import jQuery from 'jquery'
import template from './eggs.mustache'

var EggsView = Backbone.View.extend({
  template,
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

export default EggsView;

