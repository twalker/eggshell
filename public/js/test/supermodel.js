require([
	'mocha',
	'chai',
	'sinon',
	'underscore',
	'backbone',
	'supermodel'
], function(mocha, chai, sinon, lodash, Backbone, Supermodel){

	// setup
	var assert = chai.assert,
		expect = chai.expect;

	mocha.setup('bdd');

	// MODELS AND ASSOCIATIONS
	//////////////////////////
	var Album = Supermodel.Model.extend({
		defaults: {
			id: null,
			name: null,
			artist: null // id of associated artist
		}
	});
	var Albums = Backbone.Collection.extend({
		model: function(attrs, options){
			return Album.create(attrs, options);
		}
	});

	var Bio = Supermodel.Model.extend({
		defaults: {
			id: null,
			artist: null,
			description: null
		}
	});

	var Artist = Supermodel.Model.extend({
		defaults: {
			id: null,
			name: null,
			albums: null // array of album id's--revisit this pattern
		},
		urlRoot: '/api/artists/'
	});
	var Artists = Backbone.Collection.extend({
		url: '/api/artists',
		model: function(attrs, options){
			return Artist.create(attrs, options);
		}
	});

	Artist.has().many('albums', {
		collection: Albums.extend({
			url: function(){
				return '/api/artists/' + this.owner.id + '/albums';
			}
		}),

		toJSON: function(){
			// put the album id's back in the albums attribute, see:
			return lodash.extend(Supermodel.Model.prototype.toJSON.apply(this, arguments), {
				albums: this.albums().pluck('id')
			});
		},
		inverse: 'artist'
	});

	Album.has().one('artist', {
		model: Artist,
		id: 'artist',
		inverse: 'albums'
	});

	Artist.has().one('bio', {
		model: Bio,
		id: 'bio',
		inverse: 'artist'
	});


	// FIXTURES
	///////////
	var fixtures = {
		artists: {
			slayer: {"id": "slayer", "name": "Slayer", "albums": ["reign", "soh", "mercy"]},
			metallica: {"id": "metallica", "name": "Metallica", "albums": ["puppets", "killem", "lightning"]}
		},
		albums: {
			slayer: [
				{"id":"reign", "artist": "slayer", "name":"Reign in Blood", "year": 1986},
				{"id":"soh", "artist": "slayer", "name":"South of Heaven", "year": 1988},
				{"id":"mercy", "artist": "slayer", "name":"Show No Mercy", "year": 1983}
			],
			metallica: [
				{"id":"puppets", "artist": "metallica", "name":"Master of Puppets", "year": 1986},
				{"id":"killem", "artist": "metallica", "name":"Kill 'em All", "year": 1983},
				{"id":"lightning", "artist": "metallica", "name":"Ride the Lightning", "year": 1984}
			]
		},
		bio: {
			slayer: {id: 1, artist: "slayer", description: "best band"},
			metallica: {id: 2, artist: "metallica", description: "splendid band"}
		}

	};

	// TESTs
	////////
	describe('understanding Supermodel', function() {
		var server;

		beforeEach(function(){
			// boostrap all albums
			new Albums(fixtures.albums.slayer.concat(fixtures.albums.metallica));
			server = sinon.fakeServer.create();
			server.autoRespond = true;
		});

		afterEach(function(){
			Album.all().reset();
			Artist.all().reset();
			server.restore();
		});

		it('Model.create should cache model references by id', function(){
			var artists = new Artists([fixtures.artists.slayer]);
			var slayer = Artist.create({id: 'slayer'});
			var imposter = Artist.create({id: 'slayer'});
			assert.equal(slayer, Artist.all().get('slayer'));
			assert.equal(slayer, imposter);
		});

		describe('one to many associations', function(){

			it('should reflect associations in model properties', function(){

				var artists = new Artists([fixtures.artists.slayer, fixtures.artists.metallica]);
				var slayer = Artist.create({id: 'slayer'});
				var mercy = Album.all().get('mercy');

				assert.equal(slayer.albums().size(), 3);
				assert.equal(slayer.albums().get('mercy'), mercy);
				assert.deepEqual(slayer.albums().get('mercy').toJSON(), mercy.toJSON());
				assert.isFalse(slayer.has('albums'), 'associated atributes are parsed out');
				assert.isTrue(slayer.albums().any(), 'but we can still do existence checks');

				assert.strictEqual(mercy.artist(), slayer);

				// can switch associations by changing attribute
				var metallica = Artist.create({id: 'metallica'});
				mercy.set('artist', 'metallica');
				assert.strictEqual(mercy.artist(), metallica);

			});

		});

		describe.skip('one to one associations', function(){

			it('should be great', function(done){

			});

		});

		describe.skip('has associated models', function(){

			it('should be great', function(done){

			});

		});

		describe('fetching associated models', function(done){

			it('should be able to call fetch on associated/nested model methods', function(done){
				var slayer = Artist.create(fixtures.artists.slayer);
				slayer
					.albums()
					.fetch({success: function(collection){
						assert(collection.size(), 3);
						assert.deepEqual(collection.toJSON(), fixtures.albums.slayer);
					}})
					.done(function(){
						//slayer.bio().fetch();
					});

				server.respondWith('GET',
					'/api/artists/slayer/albums', [
					200, {'Content-Type': 'application/json'},
					JSON.stringify(fixtures.albums.slayer)
				]);

				var mercy = slayer.albums().get('mercy');
				mercy
					.artist()
					.fetch({success: function(model){
						assert.strictEqual(model, slayer);
						done();
					}});
				//assert.throws(mercy.url(), /must be specified/, 'does not magically set the url of nested models');

				server.respondWith('GET',
					'/api/artists/slayer', [
					200, {'Content-Type': 'application/json'},
					JSON.stringify(fixtures.artists.slayer)
				]);

			});

		});

		describe('find or create associated models', function(){

			it('should indicate whether or not there is a nested model based on attribute', function(){
				var slayer = Artist.create(fixtures.artists.slayer);
				assert.isNull(slayer.get('albums'), "BEWARE: associated child id's are removed during parse")
				assert.isTrue(slayer.albums().any());

				var front242 = Artist.create({id: 'two4two', name: 'Front 242', albums: ["noexist"]});
				var fla = Artist.create({id: 'fla', name: 'Front Line Assembly'})
				assert.isTrue(front242.albums().any());
				assert.isFalse(fla.albums().any());
			});

			it('could be used for fetch or create logic (one to one)', function(done){
				var slayer = Artist.create(lodash.extend({}, fixtures.artists.slayer, {bio: 1}));
				// use a one to one relationship.

				slayer.fetchOrCreate = function(key){
					var dfr = new jQuery.Deferred();
					if(this.has(key)){
						this[key]()
							.fetch({url: slayer.url() + '/bio'})
							.done(dfr.resolve);
					} else {
						dfr.resolve(new Bio({artist: slayer.id}));
					}
					return dfr.promise();
				};

				slayer.fetchOrCreate('bio').done(function(){
					done();
				});

				server.respondWith('GET',
					'/api/artists/slayer/bio', [
					200, {'Content-Type': 'application/json'},
					JSON.stringify(fixtures.bio.slayer)
				]);

			});

		});


	});

	// Start runner
	mocha.run();
});
