module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			reload: {
				files: [
					'views/*.jade',
					'public/css/*.css',
					'public/js/*.js',
					'public/img/*.{png,jpg,jpeg}'

					// '**/*.html',
					// '**/styles/*.css',
					// '**/scripts/*.js',
					// '**/images/*.{png,jpg,jpeg}'
				],
				tasks: 'tinylr-reload'
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "public/js/src",
					mainConfigFile: "public/js/src/config.js",
					out: "public/js/dist/<%= pkg.name %>.js",
					name: "main",
					optimize: "uglify2"
				}
			}
		}
		
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('tiny-lr');

	grunt.registerTask('reload', ['tinylr-start', 'watch']);
	grunt.registerTask('default', ['reload']);
};