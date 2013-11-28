module.exports = function(grunt) {
  /*  Project configuration. */
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    bowerDir: grunt.file.readJSON('.bowerrc').directory,

    // Shared JS File locations
    jsfiles: {
      client: [
        'gruntfile.js',
        'public/js/src/**/*.js',
        '!<%= bowerDir %>/**'
      ],
      server: [
        'app.js',
        'package.json',
        'routes/*'
      ]
    },

    // The clean task removes previous built files from the dist folder.
    clean: {
      dist: ['public/js/dist/'],
      modules: ['node_modules'],
      components: ['<%= bowerDir %>']
    },

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
          optimize: 'none',
          useSourceUrl: true
        }
      },
      // production env: minified
      prod: {
        options: {
          out: 'public/js/dist/<%= pkg.name %>.prod.js',
          optimize: 'uglify2',
          preserveLicenseComments: false,
          generateSourceMaps: true
        }
      }
    },

    notify: {
      css: {
        options: {
          message: 'stylus compiled'
        }
      },
      js: {
        options: {
          message: 'js compiled'
        }
      },
      reload: {
        options: {
          message: 'reload sent'
        }
      }
    },

    // watches for file changes and performs tasks
    watch: {
      css: {
        files: ['public/css/**/*.styl'],
        tasks: ['stylus', 'notify:css']
      },
      js: {
        files: [
          '<%= jsfiles.client %>',
          'public/js/src/views/**/*.mustache'
        ],
        tasks: ['jshint', 'requirejs:dev', 'notify:js']
      },
      compiled: {
        files: [
          // built css
          'public/css/style.css',
          // built js
          'public/js/dist/**/*.js',
          // unit tests
          'public/js/test/*.js',
          // server-side views
          'views/**/*.jade'
        ],
        tasks: ['notify:reload'],
        options: {
          event: ['changed', 'added'],
          livereload: true
        }
      }
    },
    'node-inspector': {
      custom: {
        options: {
          //'web-port': 3000,
          //'web-host': 'localhost'
          'save-live-edit': true
        }
      }
    }
  });

  /* Load task plugins */
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  /* Register primary tasks */
  // `grunt build` builds fresh production js/css files
  grunt.registerTask('build', ['jshint', 'clean:dist', 'stylus', 'requirejs']);

  // `grunt uninstall` cleans out all external dependencies
  grunt.registerTask('uninstall', ['clean']);

  // `grunt dev` builds fresh distributable js/css files and starts watching
  grunt.registerTask('dev', ['build', 'watch', 'node-inspector']);

  // `grunt` an alias to the build task
  grunt.registerTask('default', ['build']);

};
