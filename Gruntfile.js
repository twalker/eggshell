module.exports = function(grunt) {
	/*  Project configuration. */
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// Shared JS File locations
		jsfiles: {
			client: [
				'Gruntfile.js',
				'public/js/src/**/*.js'
			],
			server: [
				'app.js',
				'package.json',
				'routes/*'
			]
		},

		// The clean task removes previous built files from the dist folder.
		clean: ['public/js/dist/'],

		jshint: {
			options: {jshintrc: '.jshintrc'},
			all: ['<%= jsfiles.client %>','<%= jsfiles.server %>']
		},

		// The stylus task compiles .styl files to css
		stylus: {
			compile: {
				options: { compress: false },
				files: {
					'public/css/style.css': 'public/css/style.styl'
				}
			}
		},

		// The requirejs task traces all client-side app dependencies,
		// concatenates, minifies, and creates built files in the dist folder.
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
			// production env: minified
			prod: {
				options: {
					out: 'public/js/dist/<%= pkg.name %>.prod.js',
					optimize: 'uglify2'
				}
			}
		},

		// watches for file changes and performs tasks
		watch: {
			css: {
				files: ['public/css/**/*.styl'],
				tasks: ['stylus'],
				options: {
					livereload: true
				}
			},
			js: {
				files: [
					'<%= jsfiles.client %>',
					'public/js/src/views/**/*.mustache'
				],
				tasks: ['jshint', 'requirejs:dev'],
				options: {
					livereload: true
				}
			},
			homeless: {
				files: [
					// unit tests
					'public/js/test/*.js',
					// server-side views
					'views/**/*.jade'
				],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			}
		}
	});

	/* Load task plugins */
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-livereload');

	/* Register primary tasks */
	// `grunt build` builds fresh production js/css files
	grunt.registerTask('build', ['jshint', 'clean', 'stylus', 'requirejs']);

	// `grunt dev` builds fresh distributable js/css files and starts watching for
	// code changes--sending livereload messages when it does.
	grunt.registerTask('dev', ['build', 'watch']);

	// `grunt` an alias to the build task
	grunt.registerTask('default', ['build']);

};