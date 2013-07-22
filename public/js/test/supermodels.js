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
						slayer = artists.last()
						return slayer.albums().fetch();
					})
					.then(function(){
						metallica = artists.first();
						return metallica.albums().fetch();
					})
					.done(function(){
						// TOTRY: change the artist
						var puppets = Album.all().get('puppets');

						assert.strictEqual(puppets.artist(), metallica);
						// move album from metallica to slayer
						puppets.set('artist_id', 'slayer');
						// I seem forced to use the model_id convention.
						assert.strictEqual(puppets.artist(), slayer);
						console.log(slayer.toJSON())
						assert.equal(slayer.albums().size(), 4);
						done();
					})

			});


		});


	});

	// Start runner
	mocha.run();
});
