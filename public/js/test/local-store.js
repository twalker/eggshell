require(['require', 'mocha', 'chai',
		'underscore',
		'local-store'
	], function(require, mocha, chai, lodash, store){

	// Setup
	var assert = chai.assert
	mocha.setup('bdd');

	describe('LocalStore', function() {

		function purgeStorage(){
			for (var i = window.localStorage.length-1; i >= 0 ; --i) {
				var key = window.localStorage.key(i);
				localStorage.removeItem(key);
			}
		}
		afterEach(purgeStorage);


		describe('create(key, fnId)', function() {

			it('should create a new item in local storage for a given key', function(){
				var mystery = store.create('mystery-machine');

			});

		});

		describe('add(obj, expires)', function() {

			it('should add a new item in local storage for a given key', function(){
				var mystore = store.create('mystery-machine');
				mystore.add({id: 1, a: 'a'}, Date.now() + 1000);
				assert(window.localStorage.getItem('mystery-machine'))
			});
		});



	});

	// Start runner
	mocha.run();
});
