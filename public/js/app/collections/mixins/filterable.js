/**
* Filterable mixin for collections that need multiple filters applied simultaneously.
* Useful when the collection is in a grid with filter views.
*
* @example
* // require filterable and mix into the consuming collection.
* var MyCollection = Backbone.Collection.extend({
*   // consuming collections are encouraged to expose custom filters.
*    addTypeFilter: function(typeId){
*      return this.addFilter('type', function(model){
*        return model.get('type') === typeId;
*    }
* });
*
* lodash.defaults(MyCollection.prototype, filterable);
*
* var myColl = new MyCollection();
* myColl.addTypeFilter('tasty');
*
* myColl.addFilter('big',function(model){
*   return model.get('count') > 1000;
* });
*
* myColl.filtered();// return array of all big, and tasty models.
*
**/

      import lodash from 'lodash'

  var filterable = {
    // add a filter to a filters property with the provided key.
    addFilter: function(key, fnFilter, options){
      this.filters = this.filters || {};
      this.filters[key] = fnFilter;
      var silent = options && options.silent;
      if(!silent) this.filtered();
      return this;
    },

    // remove an existing filter by the provided key.
    removeFilter: function(key, options){
      if(this.filters[key]) delete this.filters[key];
      var silent = options && options.silent;
      if(!silent) this.filtered();
      return this;
    },

    // remove all the filters from instance.
    clearFilters: function(options){
      this.filters = {};
      var silent = options && options.silent;
      if(!silent) this.filtered();
      return this;
    },

    // return a fully filtered subset of models for the collection.
    filtered: function(){
      var filtered = this.applyFilters(this.models);
      this.trigger('filter', filtered);
      return filtered;
    },

    // loop through filters returning a subset that pass all filters.
    applyFilters: function(models){
      lodash.forOwn(this.filters, function(fnValue, key, list){
        models = models.filter(fnValue);
      }, this);
      return models;
    }
  };

  export default filterable;
