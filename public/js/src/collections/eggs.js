/**
 * Eggs collection.
 */
import Backbone from './../backbone-extended'
import Egg from '../models/egg';

var Eggs = Backbone.Collection.extend({
  url: function(){
    return 'api/eggs';
  },

  model: Egg,

  crackedCount: function(){
    return this.where({cracked: true}).length;
  }

});

export default Eggs;
