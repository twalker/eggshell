/**
 * TODO:
 * - rjs not running after lint fails, then fixed syntax error
 * - get sourcemaps when supported
 */
var gulp = require('gulp'),
  bump = require('gulp-bump'),
  clean = require('gulp-clean'),
  stylus = require('gulp-stylus'),
  nib = require('nib'),
  jshint = require('gulp-jshint'),
  rjs = require('gulp-requirejs'),
  uglify = require('gulp-uglify'),
  livereload = require('gulp-livereload');


gulp.task('css', function(){
  return gulp.src('public/css/style.styl')
    .pipe(stylus({use: [nib()], import: ['nib']}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', function() {
  return gulp.src(['./public/js/src/**/*.js', '!./public/js/src/bower_components/**'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.src(rjs({
      out: 'eggshell.js',
      baseUrl: './public/js/src',
      mainConfigFile: './public/js/src/config.js',
      name: 'config',
      optimize: 'none',
      include: 'require-lib',
      useSourceUrl: true
    }).pipe(gulp.dest('./public/js/dist/dev/')))
    )

    //.pipe(gulp.dest('./public/js/dist/dev/'))
    //.pipe(uglify())
    //.pipe(gulp.dest('./public/js/dist/prod/'));
});

gulp.task('rjs', ['lint'], function(){
  return rjs({
    out: 'eggshell.js',
    baseUrl: './public/js/src',
    mainConfigFile: './public/js/src/config.js',
    name: 'config',
    optimize: 'none',
    include: 'require-lib',
    useSourceUrl: true
  })
  .pipe(gulp.dest('./public/js/dist/dev/'))
  .pipe(uglify())
  .pipe(gulp.dest('./public/js/dist/prod/'));
});

gulp.task('lint', function() {
  return gulp.src(['./public/js/src/**/*.js', '!./public/js/src/bower_components/**'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('clean', function() {
  return gulp.src(['./public/js/dist'], {read: false})
    .pipe(clean());
});

// Increment packages by patch point
gulp.task('bump', function(){
  return gulp.src(['./bower.json', './package.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){

  gulp.watch('./public/css/style.styl', ['css']);
  gulp.watch(['./public/js/src/**/*.js','public/js/src/views/**/*.mustache'], ['js']);

  var server = livereload();
  gulp.watch([
    './public/js/dist/**/*.js',
    './public/js/test/*.js',
    './public/css/*.css'
  ]).on('change', function(file) {
    //console.log(file.path + ' changed')
    server.changed(file.path);
  });

});

gulp.task('default', ['clean', 'css', 'lint', 'rjs']);

gulp.task('build', ['clean', 'css', 'rjs', 'bump']);

