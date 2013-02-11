module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		regarde: {
			css: {
				files: 'public/css/*',
				tasks: ['livereload']
			}
		}		
	});

	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.registerTask('default', ['livereload-start', 'regarde']);
};