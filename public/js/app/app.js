/**
 * Initializes the backbone application.
 */

      import jQuery from 'jquery'
      import lodash from 'lodash'
      import Backbone from 'backbone'
      import nav from 'app/nav'

      import Egg from 'app/models/egg'
      import Eggs from 'app/collections/eggs'
      import EggsRouter from 'app/routers/eggs'

  var app = {
    versions: {
      jquery: jQuery.fn.jquery,
      lodash: lodash.VERSION,
      backbone: Backbone.VERSION
    },
    // single page app boot procedure
    init: function(bootdata){
      console.log('Backbone', Backbone.$ = jQuery)
      // Instantiate root view
      var rootView = this.rootView = new Backbone.View({el: jQuery('#content')});

      // initialize router(s)
      new EggsRouter({ elRoot: rootView.$el });

      // Start watching for navigation events
      nav.start();

      // global pushState link handler
      rootView.$el.on('click', 'a[data-pushlink]',  nav.onPushLinkClick.bind(nav));

      return this;
    }
  };

  lodash.bindAll(app);

  export default app

