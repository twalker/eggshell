/**
 * Eggs router is the controller for eggs.
*/
import Backbone from '../backbone-extended'

import Eggs from '../collections/eggs'
import EggsView from '../views/eggs/eggs'

export default Backbone.Router.extend({
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


