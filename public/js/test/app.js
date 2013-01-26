require(['require', 'mocha', 'chai',
		'app'
	], function(require, mocha, chai, app){

	// Setup
	var assert = chai.assert,
		should = chai.should(),
		expect = chai.expect;

	mocha.setup('bdd');

	describe("app", function() {

		describe("init", function() {

			it("should exist", function(){
				assert.ok(app.init);
			});

		});

	// Start runner
	mocha.run();
});
