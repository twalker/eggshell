/**
* Filterable mixin for collections that need filters applied to them, usually
* in when used in grid with filters.
*
* @example
* // require filterable and mix into the consuming collection.
* var MyCollection = Backbone.Collection.extend({
*   // consuming collections are encouraged to expose custom filters.
*    addTypeFilter: function(typeId){
*    return this.addFilter('type', function(model){
*      return model.get('type') === typeId;
*    });
*   },
* });
*
* lodash.defaults(MyCollection.prototype, filterable);
*
* var myColl = new MyCollection();
* myColl.addFilter('big',function(model){
*   return model.get('count') > 1000;
* });
* myColl.filtered();// return array of all models w/count > 1000
*
**/
define(function(require){
  var lodash = require('underscore');
  var filterable = {
    // add a filter to a filters property with the provided name.
    addFilter: function(name, fnFilter){
      this.filters = this.filters || {};
      this.filters[name] = fnFilter;
      return this;
    },

    // remove an existing filter by the provided name.
    removeFilter: function(name){
      if(this.filters[name]) delete this.filters[name];
      return this;
    },

    // remove all the filters from instance.
    clearFilters: function(){
      this.filters = {};
      return this;
    },

    // return a fully filtered subset of models for the collection.
    filtered: function(){
      return this.applyFilters(this.models);
    },

    // loop through filters returning a subset that pass all filters.
    applyFilters: function(models){
      var self = this;
      //console.log('applyFilters', filters, models.length);
      lodash.each(self.filters, function (fnValue, key, list) {
        models = models.filter(fnValue);
      }, self);
      //console.log('applyFilters:after', models.length);
      return models;
    }
  };

  return filterable;

});