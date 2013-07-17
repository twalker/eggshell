/**
 * Relateable Model manages relations to other models.
 *
 * usage:
 * store.set('collection1', new Collection()).fetch()
 * collection1 = store.get('collection1');
 * var c = store.set('collection2', new Collection2())
 *

 */
define(function(require){
	var lodash = require('underscore'),
		jQuery = require('jquery');


	return {
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
				relModel = new rel.relatedModel({id: this.get(key)});
				relModel.fetch({success: function(model){
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
		}
	};
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
		},
	*/
});
