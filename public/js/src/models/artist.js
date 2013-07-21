/**
* module for an Artist model
**/
define(function(require){
	var Supermodel = require('supermodel'),
		fetchOnce = require('models/mixins/fetch-once');

	var Artist = Supermodel.Model.extend({
		defaults: {
			id: null,
			name: null
		},
		/*
		url: function(){
			return '/api/artists/' + this.id;
		},
		*/
		urlRoot: '/api/artists/',
		initialize: function(attrs, options){
			//console.log('artist constructed', attrs);

			Supermodel.Model.prototype.initialize.apply(this, arguments);
		},
		// make it a fetchOnce for fun.
		fetch: fetchOnce


	});

	return Artist;
});