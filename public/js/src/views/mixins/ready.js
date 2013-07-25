/**
* View.ready indicates when a view has rendered, returning a promise.
*
* Needs to be patched into a view's prototype due to the initialize and render methods.
* e.g. mixer.patch(View2.prototype, ready);
**/
define(function(require){
	var jQuery = require('jquery');

	return {
		initialize: function(){
			this._dfrReady = new jQuery.Deferred();
		},

		render: function(){
			this._dfrReady.resolve(this);
		},

		ready: function(){
			return this._dfrReady.promise();
		}
	};

});
