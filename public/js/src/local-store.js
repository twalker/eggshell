/**
 * A LocalStorage module with expiration for items.
 *
 * TOIMPROVE:
 * - re-use proto for Session and Memory stores
 * - is there a performance hit from methods constantly retrieving form localStorage?
 * - revisit using try/catch for exceeding size.
 * 	see: https://github.com/pamelafox/lscache/blob/master/lscache.js
 * 	oh damn, here's a full implementation:
 * 	https://github.com/nbubna/store/
 *
 */
define(['underscore'], function(lodash){

	var baseProto = {
		// removes an item
		unset: function(key){
			var stored = this._bucket;
			if(key in stored) delete stored[key];
			this._bucket = stored;
		},
		// whether or not an item exists for the given key
		has: function(key){
			return (key in this._bucket);
		},
		// convenience wrapper for testing purposes.
		_chain: function(){
			return lodash(this._bucket);//.pluck('val');
		}
	};

	var localProto = lodash.defaults({
		// adds a key/value pair to the storage bucket.
		set: function(key, val, expires){
			// optional expires can be milliseconds since epoch (number),
			// a date, or a datestring. Defaults to MaxDate
			if(lodash.isString(expires)) expires = Date.parse(expires);
			if(lodash.isDate(expires)) expires = expires.getTime();

			var stored = this._bucket;
			stored[key] = {
				val: val,
				expires: expires || Math.floor(8.64e15)
			};
			this._bucket = stored;
		},
		// gets an item
		get: function(key){
			var stored = this._bucket;
			return (key in stored) ? stored[key].val : undefined;
		},
		// removes expired items
		prune: function(){
			var stored = this._bucket;
			var nowstamp = Date.now();
			Object.keys(stored).forEach(function(key){
				if(nowstamp >= stored[key].expires){
					// console.log('deleting', key, stored[key].expires);
					delete stored[key];
				}
			});
			this._bucket = stored;
		},
		// removes the entire bucket.
		remove: function(){
			window.localStorage.removeItem(this.name);
		}
	}, baseProto);

	var sessionProto = lodash.defaults({
		// adds a key/value pair to the storage bucket.
		set: function(key, val){
			var stored = this._bucket;
			stored[key] = val;
			this._bucket = stored;
		},

		// gets an item
		get: function(key){
			var stored = this._bucket;
			return (key in stored) ? stored[key] : undefined;
		},

		remove: function(){
			window.sessionStorage.removeItem(this.name);
		}
	}, baseProto);

	var store = {
		create: function(name){
			// create an instance, ES5 style.
			return Object.create(localProto, {
				// gets/sets the full object from localStorage
				_bucket: {
					get: function(){
						var stored = window.localStorage.getItem(this.name);
						return (stored) ? JSON.parse(stored) : {};
					},
					set: function(obj){
						return window.localStorage.setItem(this.name, JSON.stringify(obj));
					}
				},
				name: {
					value: name,
					writable: false,
					enumerable: false,
					configurable: false
				}
			});
		},
		// store.createLocal('foo')
		// store.createSession('bar')
		// store.local.create()
		// store.session.create()

		createSession: function(name){
			// create an instance, ES5 style.

			return Object.create(sessionProto, {
				// gets/sets the full object from localStorage
				_bucket: {
					get: function(){
						var stored = window.sessionStorage.getItem(this.name);
						return (stored) ? JSON.parse(stored) : {};
					},
					set: function(obj){
						return window.sessionStorage.setItem(this.name, JSON.stringify(obj));
					}
				},
				name: {
					value: name,
					writable: false,
					enumerable: false,
					configurable: false
				}
			});
		}

	};

	return store;
});
