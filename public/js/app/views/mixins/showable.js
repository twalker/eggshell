/**
* View mixin to show or hide a view's root element: $el.
**/
define({

  show: function(){
    this.$el.show.apply(this.$el, arguments);
    return this;
  },

  hide: function(){
    this.$el.hide.apply(this.$el, arguments);
    return this;
  },

  isVisible: function(){
    return this.$el.is(':visible');
  },

  toggle: function(){
    this.$el.toggle.apply(this.$el, arguments);
    return this;
  }

});
