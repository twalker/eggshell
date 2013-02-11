module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		regarde: {
			css: {
				files: 'public/css/*',
				tasks: ['livereload']
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

	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['livereload-start', 'regarde']);

};