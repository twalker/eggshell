/**
* module for a egg model
**/
define(function(require){
  var Backbone = require('backbone');

  var Egg = Backbone.Model.extend({
    defaults: {
      id: null,
      name: null,
      cracked: false
    },

    initialize: function(){

    }


  });

  return Egg;
});