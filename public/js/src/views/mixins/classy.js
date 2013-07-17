/**
* View mixin to work with css classes on the root element.
**/
define({

	addClass: function() {
		this.$el.addClass.apply(this.$el, arguments);
		return this;
	},

	removeClass: function(){
		this.$el.removeClass.apply(this.$el, arguments);
		return this;
	},

	toggleClass: function(){
		this.$el.toggleClass.apply(this.$el, arguments);
		return this;
	}
});
