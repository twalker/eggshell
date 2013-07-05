require(['require', 'mocha', 'chai',
		'underscore',
		'local-store'
	], function(require, mocha, chai, lodash, store){

	// Setup
	var assert = chai.assert
	mocha.setup('bdd');

	describe('localStore', function() {
		window.store = store;

		function purgeStorage(){
			for (var i = window.localStorage.length-1; i >= 0 ; --i) {
				var key = window.localStorage.key(i);
				window.localStorage.removeItem(key);
			}
		}

		afterEach(purgeStorage);


		describe('create(name)', function() {
			it('should create an instance of a local storage bucket for a given name (key)', function(){
				var mystery = store.create('mystery-machine');
				mystery.set('foo', 'bar', Date.now() + 1000);
				assert.ok(window.localStorage.getItem('mystery-machine'))
			});

		});

		describe('get(key); set(key, value, expires)', function() {
			it('should add a new item in local storage for the given key', function(){
				var mystore = store.create('mystery-machine');
				mystore.set('sProp', 'hello', Date.now() + 1000);
				assert.equal(mystore.get('sProp'), 'hello');
			});

			it('should store plain objects', function(){
				var mystore = store.create('mystery-machine');
				mystore.set('oProp', {a: 1, b: 2}, Date.now() + 1000);
				assert.deepEqual(mystore.get('oProp'), {a:1, b:2})
			});

			it('should store primitives (strings, bools, numbers)', function(){
				var mystore = store.create('mystery-machine');
				mystore.set('sProp', 'hello', Date.now() + 1000);
				mystore.set('iProp', 16.5, Date.now() + 1000)
				mystore.set('bProp', true, Date.now() + 1000)

				assert.equal(mystore.get('sProp'), 'hello');
				assert.equal(mystore.get('iProp'), 16.5);
				assert.isTrue(mystore.get('bProp'))
			});

			it('should store arrays', function(){
				var mystore = store.create('mystery-machine');
				mystore.set('aProp', [1,2,3], Date.now() + 1000)
				assert.deepEqual(mystore.get('aProp'), [1,2,3])
			});

			it('should accept a date, date string, or a number of milliseconds for the expires argument', function(){
				var mystore = store.create('mystery-machine');
				var nowPlusOneSecond = Date.now() + 1000;
				var dtNowPlusOneSecond = new Date(nowPlusOneSecond);
				var MAX_DATE = Math.floor(8.64e15);

				mystore.set('milliseconds', 'foo', nowPlusOneSecond);
				mystore.set('date', 'foo', dtNowPlusOneSecond);
				mystore.set('datestring', 'foo', dtNowPlusOneSecond.toISOString());
				mystore.set('default', 'foo');

				// TOREVISIT: using internal knowledge to test
				var expires = mystore
					._chain()
					.pluck('expires')
					.groupBy()
					.value();
				assert.equal(expires[nowPlusOneSecond].length, 3);
				assert.equal(expires[MAX_DATE].length, 1)
			});

		});

		describe('.has(key)', function(){
			it('should report if there is an item for the provided key', function(){
				var mystore = store.create('mystery-machine');
				mystore.set('foo', 0);
				assert.isTrue(mystore.has('foo'));
				assert.isFalse(mystore.has('bar'));
			});
		});

		describe('.unset(key)', function(){
			it('should remove an item', function(){
				var mystore = store.create('mystery-machine');
				mystore.set('foo', 0);

				mystore.unset('foo');

				assert.isFalse(mystore.has('bar'));
			});
		});

		describe('.prune()', function(){
			it('should delete expired items', function(){
				var mystore = store.create('mystery-machine');
				var nowMinusOneSecond = Date.now() - 1000;
				var nowPlusOneSecond = Date.now() + 1000;

				mystore.set('old', 'foo', nowMinusOneSecond);
				mystore.set('future', 'foo');

				mystore.prune();

				assert.isFalse(mystore.has('old'));
				assert.isTrue(mystore.has('future'));
			});
		});
	});

	// Start runner
	mocha.run();
});
