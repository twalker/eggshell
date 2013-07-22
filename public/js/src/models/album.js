/**
* module for an Album
**/
define(function(require){
	var Supermodel = require('supermodel');

	var Album = Supermodel.Model.extend({
		defaults: {
			id: null,
			name: null,
			year: null,
			artist_id: null,
		},

		initialize: function(attrs, options){
			console.log('album constructed', attrs);
			Supermodel.Model.prototype.initialize.apply(this, arguments);
		}

	});

	return Album;
});