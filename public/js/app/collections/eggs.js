/**
 * Eggs collection.
 */

      import Backbone from 'backbone'
      import Egg from 'app/models/egg'

  var Eggs = Backbone.Collection.extend({
    url: function(){
      return 'api/eggs';
    },

    model: Egg,

    crackedCount: function(){
      return this.where({cracked: true}).length;
    }

  });

  export default Eggs

