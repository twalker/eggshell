/**
 * Memory/Cache store
 * To share model references accross the application.
 *
 * usage:
 * store.set('collection1', new Collection()).fetch()
 * collection1 = store.get('collection1');
 * var c = store.set('collection2', new Collection2())
 */
define(function(){
	var data = {};
	// register()?? to vary store by type?
	// else, Type:id
	return {
		has: function(key){
			return data.hasOwnProperty(key);
		},
		get: function(key){
			if(!data.hasOwnProperty(key)){
				throw new Error(key + ' has not yet been set as a shared collection.');
			}
			return data[key];
		},
		set: function(key, value){
			// return the value for chaining fetch calls. e.g.
			// sharedCollections.set('collection', new Collection()).fetch()
			// or var c = sharedCollections.set('collection', new Collection())
			return data[key] = value;
		},
		unset: function(key){
			if(data[key]) delete data[key];
		}
	};
});
