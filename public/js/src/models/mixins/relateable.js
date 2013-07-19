/**
 * Relateable Model manages relations to other models.
 *
 * @example
 * // do this as key/value instead of an array? re-use key?
 * relations: [
 *   {
 *    model: ModelRef,
 *    key: 'othermodelnameId',
 *    inverseKey: 'thismodelnameId'
 *   },
 *   {
 *   	collection: CollectionRef,
 *   	// url??
 *   	??
 *   }
 *
 * ]
 *
 */
define(function(require){
	var lodash = require('underscore'),
		jQuery = require('jquery');

	return {

		/*
		// override model's constructor to return instances in model.all store/cache
		constructor: function(attr, options){
			var all = this.constructor.all;
			if(all.get(attr.id)){
				return all.get(attr.id).set(attr);
			} else {
				 return all.add(attr, options)
			}
		},

		all: 'should be a collection on the constructor',
		*/
		// fetch the model/collection for the given relation key.
		fetchRelated: function fetchRelated(key) {
			var dfr = new jQuery.Deferred();
			// find the relation in for the given key
			var rel = lodash.find(this.relations, function(relation){
				return relation.key === key;
			});
			var relModel;
			// promises array? do store lookup here?
			//var relModel = this.has(key) ? new rel.relatedModel({id: this.get(key)})
			//	: new rel.relatedModel({campaign: this.id});
			if(this.has(key)){
				// todo: if(rel === 'many')
				//store.findOrCreate()
				// or related mode's constructor uses an all collection for cache storage
				relModel = new rel.relatedModel({id: this.get(key)});
				relModel.fetch({success: function(model){
					// before resolving, add an instance property to the relation
					rel._instance = model;
					dfr.resolve(relModel);
				}});
			} else {
				// using undefined for now
				dfr.resolve(relModel);
			}
			return dfr.promise();
		},

		fetchAllRelated: function fetchAllRelated(){
			var self = this;
			//console.log('here', lodash.pluck(this.relations, 'key').map(this.fetchRelated.bind(this)));
			return lodash(this.relations).pluck('key').map(this.fetchRelated.bind(this)).value();
		},

		fetchRelatedModel: function(key) {},
		fetchRelatedCollection: function(key){},

		// gets an instance reference to the related model/collection by give key
		getRelated: function getRelated(key){
			var relation = this.getRelation(key);
			return relation._instance;// depending on it being set in construcor/parse??
		},
		// sets an instance reference and set's the key to it's id
		setRelated: function setRelated(key, model){
			this.set(key, model.id);
			return this.getRelation(key)._instance = model;
		},
		// get's the metadata in this.relations property. YAGNI?
		getRelation: function getRelation(key){
			var rel = lodash.find(this.relations, function(relation){
				return relation.key === key;
			});
			return rel;
		},

		// use case?: campaign.findRelated('sms', 'lists')
		//findRelated: function findRelated(key, storeKey){
		//	var id = this.get(key);
		//	return store.get(storeKey).get(id);
		//},


		/*
		fetchOrCreateRelated: function(key, options, update){
			var dfr = new jQuery.Deferred();
			var rel = lodash.find(this.relations, function(relation){
				return relation.key === key;
			});

			var relModel = this.has(key) ? new rel.relatedModel({id: this.get(key)})
				: new rel.relatedModel({campaign: this.id});
			// console.log('relModel', relModel)
			if(this.has(key)){
				relModel.fetch({success: function(model){
					dfr.resolve(relModel);
				}});
			} else {
				dfr.resolve(relModel);
			}
			return dfr.promise();
		}
		*/

	};
});
