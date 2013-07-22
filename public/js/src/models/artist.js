/**
* module for an Artist model
**/
define(function(require){
	var Supermodel = require('supermodel'),
		Albums = require('collections/albums'),
		Album = require('models/album'),
		fetchOnce = require('models/mixins/fetch-once');

	var Artist = Supermodel.Model.extend({
		defaults: {
			id: null,
			name: null,
			albums: null,
		},
		/*
		url: function(){
			return '/api/artists/' + this.id;
		},
		*/
		urlRoot: '/api/artists/',
		initialize: function(attrs, options){
			console.log('artist constructed', attrs);

			Supermodel.Model.prototype.initialize.apply(this, arguments);
		},
		// make it a fetchOnce for fun.
		fetch: fetchOnce


	});

	// ## many
	// *Create a many-to-one or many-to-many association.*
	//
	// Options:
	//
	// * **collection** - (*required*) The collection constructor.
	// * **inverse** - (*required for many-to-one associations*) The name of the
	//   inverse association.
	// * **through** - (*required for many-to-many associations*) The name of the
	//   through association.
	// * **source** - (*required for many-to-many associations*) For many-to-one
	//   associations, the attribute where nested data is stored. For many-to-many
	//   associations, the name of the indirect association.
	// * **store** - The property to store the association in.
	//   Defaults to '_' + `name`.
	Artist.has().many('albums', {
		//collection: Albums,
		collection: Albums.extend({
			url: function(){
				return '/api/artists/' + this.owner.id + '/albums';
			}
		}),
		//source: 'albums',
		inverse: 'artist'
	});
	// ## one
	// *Create a one-to-one or one-to-many association.*
	//
	// Options:
	//
	// * **inverse** - (*required*) The name of the inverse association.
	// * **model** - (*required*) The model constructor for the association.
	// * **id** - The associated id is stored here.
	//   Defaults to `name` + '_id'.
	// * **source** - The attribute where nested data is stored.
	//   Defaults to `name`.
	// * **store** - The property to store the association in.
	//   Defaults to '_' + `name`.
	Album.has().one('artist', {
		model: Artist,
		id: 'artist',
		inverse: 'albums'
	});

	return Artist;
});