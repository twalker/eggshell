/**
 * RequireJS configuration
 */
require.config({
  deps: ['main'],

  paths: {
    // Third-party libraries
    jquery: '../vendor/jquery/jquery',
    underscore: '../vendor/lodash/js/lodash',
    backbone: '../vendor/backbone/js/backbone',
    mustache: '../vendor/mustache/js/mustache',
    requireLib: '../vendor/requirejs/js/require',
    text: '../vendor/requirejs-text/js/text',
    // Unit testing libraries
    mocha: '../vendor/mocha/js/mocha',
    chai: '../vendor/chai/chai',
    sinon: '../vendor/sinonjs/sinon'
  },

  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    mocha: {
      exports: 'mocha'
    },
    sinon: {
      exports: 'sinon'
    }
  }

});
