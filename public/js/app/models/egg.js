/**
* module for a egg model
**/

      import Backbone from 'backbone'

  var Egg = Backbone.Model.extend({
    defaults: {
      id: null,
      name: null,
      cracked: false
    },

    initialize: function(){

    }


  });

  export default Egg
