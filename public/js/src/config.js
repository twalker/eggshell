/**
 * RequireJS configuration
 */
require.config({
	deps: ['main'],

	paths: {

		// Third-party Libraries
		jquery: 'vendor/jquery-2.0.2',
		underscore: 'vendor/lodash',
		backbone: 'vendor/backbone',
		mustache: 'vendor/mustache',

		// RequireJS Plugins
		requireLib: 'vendor/require',
		text: 'vendor/text',

		// Unit testing Libraries
		mocha: '../test/vendor/mocha',
		chai: '../test/vendor/chai',
		sinon: '../test/vendor/sinon-1.7.1'
	},

	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		'mocha': {exports: 'mocha'},
		'sinon': {exports: 'sinon'}
	}
});
