/**
* View.ready indicates when a view has rendered,
* returning a promise.
*
* Needs patched into a View's prototype to trigger the initialize and render methods.
*
* @example
* mixer.patch(MyView.prototype, ready);
* var view = new MyView();
*
* view.ready(function(){console.log('view is')});
* // and/or
* view.ready().done(function(){console.log('rendered and ready!')});
* view.render();
* > view is rendered and ready!
*/
define(function(require){
	var jQuery = require('jquery');

	return {
		initialize: function(){
			this._dfrReady = new jQuery.Deferred();
		},

		ready: function(cb){
			if(cb) this._dfrReady.done(cb);
			return this._dfrReady.promise();
		},

		render: function(){
			this._dfrReady.resolve(this);
			return this;
		}
	};

});
