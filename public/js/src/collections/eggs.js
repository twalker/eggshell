/**
 * Eggs collection.
 */
define(function(require){
  var Backbone = require('backbone'),
    Egg = require('models/egg');

  var Eggs = Backbone.Collection.extend({
    url: function(){
      return 'api/eggs';
    },

    model: Egg,

    crackedCount: function(){
      return this.where({cracked: true}).length;
    }

  });

  return Eggs;
});