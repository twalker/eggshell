/**
 * RequireJS configuration
 */
require.config({
	deps: ["main"],

	paths: {
		// JavaScript folders
		lib: "../lib",

		// Libraries
		jquery: "../lib/jquery-2.0.2",
		underscore: "../lib/lodash",
		backbone: "../lib/backbone",
		mustache: "../lib/mustache",

		// RequireJS Plugins
		requireLib: "../lib/require",
		text: "../lib/text",

		// Unit testing Libraries
		mocha: "../test/vendor/mocha",
		chai: "../test/vendor/chai",
		sinon: "../test/vendor/sinon-1.7.1"
	},

	shim: {
		"backbone": {
			deps: ["underscore", "jquery"],
			exports: 'Backbone'
		},

		"mocha": {exports: "mocha"},
		"sinon": {exports: "sinon"}
	}
});
