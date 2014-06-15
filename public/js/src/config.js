/**
 * RequireJS configuration
 */
require.config({
  deps: ['main'],

  paths: {
    // Third-party libraries
    jquery: 'bower_components/jquery/dist/jquery',
    underscore: 'bower_components/lodash/dist/lodash',
    'backbone-lib': 'bower_components/backbone/backbone',
    'backbone': 'backbone-promises',
    mustache: 'bower_components/mustache/mustache',
    'require-lib': 'bower_components/requirejs/require',
    text: 'bower_components/requirejs-text/text',
    'es6-promise': 'bower_components/es6-promise/promise',
    // Unit testing libraries
    mocha: 'bower_components/mocha/mocha',
    chai: 'bower_components/chai/chai',
    sinon: 'bower_components/sinonjs/sinon'
  },

  shim: {
    'es6-promise': {exports: 'Promise'},
    mocha: { exports: 'mocha' },
    sinon: { exports: 'sinon' }
  }

});
