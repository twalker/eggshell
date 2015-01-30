/**
* module for a egg model
**/
import Backbone from './../backbone-extended'

var Egg = Backbone.Model.extend({
  defaults: {
    id: null,
    name: null,
    cracked: false
  },

  initialize: function(){

  }


});

export default Egg;
