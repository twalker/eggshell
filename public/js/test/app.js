require(['require', 'mocha', 'chai', 'sinon',
		'app'
	], function(require, mocha, chai, sinon, app){

	// Setup
	var assert = chai.assert;
	mocha.setup('bdd');

	describe('app', function(){

		describe('.init', function(){

			it('should exist', function(){
				assert(app.init);
			});

		});
	});

	// Start runner
	mocha.run();
});
