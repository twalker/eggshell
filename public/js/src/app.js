/**
 * Initializes the backbone application.
 */

import jquery from 'jquery'
import lodash from 'lodash'
import Backbone from './backbone-extended'
import nav from './nav'
import EggsRouter from './routers/eggs'


var app = {
  versions: {
    jquery: jquery.fn.jquery,
    lodash: lodash.VERSION,
    backbone: Backbone.VERSION
  },
  // single page app boot procedure
  init: function(bootdata){
    // Instantiate root view
    var rootView = this.rootView = new Backbone.View({el: jquery('#content')});

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

// add single global for app
global.app = app;

export default app;

