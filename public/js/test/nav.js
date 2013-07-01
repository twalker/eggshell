require([
	'mocha',
	'chai',
	'backbone',
	'nav'
], function(mocha, chai, Backbone, nav){

	// setup
	var assert = chai.assert,
		expect = chai.expect;

	mocha.setup('bdd');

	describe('nav', function() {

		describe('.go(path)', function(){

			after(function(){
				window.history.back();
			});

			var view = new Backbone.View();
			Backbone.history.start({ pushState: true, root: '/' });

			it('should fire a `nav:go` event', function(){
				var goFired = false;

				view.listenTo(nav, 'nav:go', function(){goFired = true;});
				nav.go('/campaigns/foo');

				assert(goFired);
			});

		});


	});

	// Start runner
	mocha.run();
});
