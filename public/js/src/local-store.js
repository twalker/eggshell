/**
 * A LocalStorage module with expiration.
 * https://github.com/pamelafox/lscache/blob/master/lscache.js
 */
define(['underscore'], function(lodash){

	/*
	var proto = {
		get: function(key){
			return JSON.parse(window.localStorage.getItem(key)).val;
		},
		// key, value, time
		set: function(key, value, expiration){
			window.localStorage.setItem(key, JSON.stringify({val: value, exp: expiration}))
		},

		flush: function(){
			for (var i = window.localStorage.length-1; i >= 0 ; --i) {
				var key = window.localStorage.key(i);
				if (key.indexOf(this.bucket) === 0) {
					localStorage.removeItem(key);
				}
			}
		},

		remove: function(){

		},
	}
	*/
	var proto = {
		// gets the full object from localStorage
		getBucket: function(){
			var stored = window.localStorage.getItem(this.bucket);
			return (stored) ? JSON.parse(stored) : [];
		},

		// save the full object in localStorage
		setBucket: function(obj){
			return window.localStorage.setItem(this.bucket, JSON.stringify(obj));
		},

		get: function(id){
			var found = this.getBucket().filter(function(obj){
				return obj.item.id === id;
			});
			return (found.length) found[0] : undefined;
		},

		has: function(id, stored){
			return (stored || this.getBucket()).some(function(obj, i){
				return obj.item.id === id;
			}, this);
		},

		// adds an item
		add: function(obj, expires){
			if(typeof expires == 'string') expires = Date.parse(expires);

			var updated = this.getBucket().filter(function(obj){
				return obj.item.id !== obj.id;
			});


			updated.push({
				item: obj,
				exp: expires,
			});

			this.set(updated);
		},

		// removes an item
		remove: function(id){
			var stored = this.getBucket();
			var updated = stored.filter(function(item){
				return item.id !== id;
			});
			this.set(updated);
		},

		chain: function(){
			return lodash(this.getBucket()).pluck('item');
		},
		find: function(){

		},

		// removes expired items
		prune: function(){
			var stored = this.getBucket();
			var nowstamp = Date.now();
			var updated = stored.filter(function(item){
				// console.log('expire', item.exp, nowstamp, nowstamp >= item.exp);
				return nowstamp <= item.exp;
			});
			this.set(updated);
		}
	};

	var store = {
		create: function(key){

			return Object.create(proto, {
				bucket: { writable: false, configurable: true, value: key }
			});
		}
	};

	return store;
});
