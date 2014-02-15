/**
 * RequireJS configuration
 */
require.config({
  deps: ['main'],

  paths: {
    // Third-party libraries
    jquery: 'bower_components/jquery/dist/jquery',
    underscore: 'bower_components/lodash/dist/lodash',
    backbone: 'bower_components/backbone/backbone',
    mustache: 'bower_components/mustache/mustache',
    requireLib: 'bower_components/requirejs/require',
    text: 'bower_components/requirejs-text/text',
    wysiwyg: 'bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg',

    // Unit testing libraries
    mocha: 'bower_components/mocha/mocha',
    chai: 'bower_components/chai/chai',
    sinon: 'bower_components/sinonjs/sinon'
  },

  shim: {
    wysiwyg: { deps: ['jquery'], exports: '$.fn.wysiwyg' },
    mocha: { exports: 'mocha' },
    sinon: { exports: 'sinon' }
  }

});
