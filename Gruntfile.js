module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		regarde: {
			css: {
				files: 'public/css/*',
				tasks: ['livereload']
			},
			src: {
				files: 'public/js/**/*.js',
				tasks: ['livereload']
			}
		},

		requirejs: {
			compile: {
				options: {
					baseUrl: 'public/js/src',
					mainConfigFile: 'public/js/src/config.js',
					out: 'public/js/dist/<%= pkg.name %>.js',
					name: 'main',
					optimize: 'uglify2'
				}
			}
		},

		jshint: {
			options: {jshintrc: '.jshintrc'},
			all: [
				'Gruntfile.js',
				'app.js',
				'public/js/src/**/*.js',
				'routes/**/*.js'
			]
		}
	});

	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// primary tasks
	grunt.registerTask('release', ['jshint', 'requirejs']);
	grunt.registerTask('dev', ['livereload-start', 'regarde']);
	grunt.registerTask('default', ['dev']);

};