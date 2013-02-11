
require.config({
	deps: ["main"],

	paths: {
		// JavaScript folders
		lib: "../lib",

		// Libraries
		jquery: "../lib/jquery-2.0.0b1",
		underscore: "../lib/lodash",
		backbone: "../lib/backbone",
		mustache: "../lib/mustache",

		// RequireJS Plugins
		text: "../lib/text",

		// Unit testing Libraries
		mocha: "../test/vendor/mocha",
		chai: "../test/vendor/chai"
	},

	shim: {
		"backbone": {
			deps: ["underscore", "jquery"],
			exports: 'Backbone',
			init: function(_, $) {
				// remove globals and configure lodash to use Mustache format templating
				_.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };
				return window.Backbone;
			}
		},

		"mocha": {exports: "mocha"}

	}
});
