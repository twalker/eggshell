/**
* module for an Artist model
**/
define(function(require){
	var Supermodel = require('supermodel');

	var Artist = Supermodel.Model.extend({
		defaults: {
			id: null,
			name: null
		},

		initialize: function(attrs, options){
			//console.log('artist constructed', attrs);

			Supermodel.Model.prototype.initialize.apply(this, arguments);
		}


	});

	return Artist;
});