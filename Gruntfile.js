module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// regarde is a replacement for the 'watch' task
		regarde: {
			css: {
				files: 'public/css/*',
				tasks: ['livereload']
			},
			src: {
				files: 'public/js/src/**/*.js',
				tasks: ['jshint', 'livereload']
			}
		},

		requirejs: {
			// shared options
			options: {
				baseUrl: 'public/js/src',
				mainConfigFile: 'public/js/src/config.js',
				name: 'config',
				include: 'requireLib'
			},
			// development env: no minification, YAGNI?
			dev: {
				options: {
					out: 'public/js/dist/<%= pkg.name %>.dev.js',
					optimize: 'none'
				}
			},
			// production env: minified	gr
			prod: {
				options: {
					out: 'public/js/dist/<%= pkg.name %>.prod.js',
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
	grunt.registerTask('dev', ['requirejs', 'livereload-start', 'regarde']);
	grunt.registerTask('default', ['dev']);
	grunt.registerTask('build', ['jshint', 'requirejs']);
};