/**
 * A LocalStorage module with expiration for items.
 *
 * TOIMPROVE:
 * - re-use proto for Session and Memory stores
 * - is there a performance hit from methods constantly retrieving form localStorage?
 * - revisit using try/catch for exceeding size.
 * 	see: https://github.com/pamelafox/lscache/blob/master/lscache.js
 */
define(['underscore'], function(lodash){
	var proto = {
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
		// removes an item
		unset: function(key){
			var stored = this._bucket;
			if(key in stored) delete stored[key];
			this._bucket = stored;
		},
		// gets an item
		get: function(key){
			var stored = this._bucket;
			return (key in stored) ? stored[key].val : undefined;
		},
		// whether or not an item exists for the given key
		has: function(key){
			return (key in this._bucket);
		},
		// convenience wrapper for testing purposes.
		_chain: function(){
			return lodash(this._bucket);//.pluck('val');
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
		}
	};

	var store = {
		create: function(name){
			// create an instance, ES5 style.
			return Object.create(proto, {
				// gets/sets the full object from localStorage
				_bucket: {
					get: function(){
						var stored = window.localStorage.getItem(name);
						return (stored) ? JSON.parse(stored) : {};
					},
					set: function(obj){
						return window.localStorage.setItem(name, JSON.stringify(obj));
					}
				}
			});
		}
	};

	return store;
});
