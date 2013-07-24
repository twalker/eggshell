/**
* Weight watcher mixin for models to track whether they are thin or fat.
* Since it needs initialization, it should be patched into the model's prototype.
*
* It accounts for the thin/fat model approach:
*   Collection.fetch returns a thin subset of model attributes.
*   Model.fetch returns a fat, full set of model attributes.
*
**/
define(function(require){
	return {
		initialize: function(){
			this.on('sync', function(){	this.lastSync = Date.now();	}, this);
		},

		isFat: function(){
			return !!this.lastSync;
		}
	};
});