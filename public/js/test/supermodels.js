require([
	'mocha',
	'chai',
	'backbone',
	'collections/artists',
	'models/artist',
	'models/album'
], function(mocha, chai, Backbone, Artists, Artist, Album){

	// setup
	var assert = chai.assert,
		expect = chai.expect;

	mocha.setup('bdd');

	describe('Supermodel tests', function() {

		describe('albums and artists', function(){

			it('should be great', function(done){
				var artists = new Artists();
				var slayer, metallica;

				artists
					.fetch()
					.then(function(){
						window.slayer = slayer = artists.last()
						return slayer.albums().fetch();
					})
					.then(function(){
						metallica = artists.first();
						return metallica.albums().fetch();
					})
					.done(function(){
						// Change the artist for an album
						var puppets = window.puppets =  Album.all().get('puppets');

						assert.strictEqual(puppets.artist(), metallica);
						// move album from metallica to slayer
						puppets.set('artist_id', 'slayer');
						// I seem forced to use the model_id convention.
						assert.strictEqual(puppets.artist(), slayer);
						console.log(slayer.toJSON())// forcing artist_id !?!?
						assert.equal(slayer.albums().size(), 4);
						done();
					})

			});


		});


	});

	// Start runner
	mocha.run();
});

// Question about forcing _id convention on post of one-to-many
/*
	var Album = Supermodel.Model.extend({
		defaults: {
			id: null,
			name: null,
			artist: null
		}
	});

	var Albums = Backbone.Collection.extend({
		model: function(attrs, options){
			return Album.create(attrs, options);
		}
	});


	var Artist = Supermodel.Model.extend({
		defaults: {
			id: null,
			name: null,
			albums: null,
		},
		urlRoot: '/api/artists/'
	});

	Artist.has().many('albums', {
		collection: Albums.extend({
			url: function(){
				return '/api/artists/' + this.owner.id + '/albums';
			}
		}),
		inverse: 'artist'
	});

	Album.has().one('artist', {
		model: Artist,
		id: 'artist',
		inverse: 'albums'
	});

	var slayer = Artist.create({"id": "slayer","name": "Slayer"});
	var metallica = Artist.create({"id": "metallica","name": "Metallica"});

	var puppets = Album.create({"id":"puppets", "artist": "metallica", "name":"Master of Puppets"});

 */