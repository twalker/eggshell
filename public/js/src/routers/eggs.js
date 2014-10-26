/**
 * Eggs router is the controller for eggs.
*/
define(function(require){
  var Backbone = require('backbone'),
    jQuery = require('jquery'),
    Eggs = require('src/collections/eggs'),
    EggsView = require('src/views/eggs/eggs');

  return Backbone.Router.extend({
    routes: {
      '': 'list'
    },

    initialize: function(options){
      this.elRoot = options.elRoot;
    },

    list: function(){

      var eggs = new Eggs();
      var eggsView = new EggsView({collection: eggs});
      this.elRoot.html(eggsView.el);

      eggs.fetch();

    }


  });
});

