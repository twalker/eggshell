/**
 * App initialization
 */
define(function(require, exports, module){
  var jQuery = require('jquery'),
    app = require('app');

  jQuery(function(){
    // initialize the application on dom ready (entry point)
    window.app = app.init();
  });
});
