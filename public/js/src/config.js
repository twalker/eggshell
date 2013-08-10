/**
 * RequireJS configuration
 */
require.config({
  deps: ['main'],

  paths: {
    // Third-party libraries
    jquery: 'bower_components/jquery/jquery',
    underscore: 'bower_components/lodash/lodash',
    backbone: 'bower_components/backbone/backbone',
    mustache: 'bower_components/mustache/mustache',
    requireLib: 'bower_components/requirejs/require',
    text: 'bower_components/requirejs-text/text',
    // Unit testing libraries
    mocha: 'bower_components/mocha/mocha',
    chai: 'bower_components/chai/chai',
    sinon: 'bower_components/sinonjs/sinon'
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
