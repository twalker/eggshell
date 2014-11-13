/**
 * TODO:
 * - rjs not running after lint fails, then fixed syntax error
 * - get sourcemaps when supported
 */
var gulp = require('gulp'),
    bump = require('gulp-bump'),
    del = require('del'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    jshint = require('gulp-jshint'),
    to5 = require('gulp-6to5'),
    rjs = require('gulp-requirejs'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');


gulp.task('css', function(){
  return gulp.src('public/css/style.styl')
    .pipe(stylus({use: [nib()], import: ['nib']}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', function() {
  return gulp.src(['./public/js/app/**/*.js', '!./public/js/app/bower_components/**'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.src(rjs({
      out: 'eggshell.js',
      baseUrl: './public/js/src',
      mainConfigFile: './public/js/app/config.js',
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

gulp.task('rjs', ['6to5', 'lint'], function(){
  return rjs({
    out: 'eggshell.js',
    baseUrl: './public/js/src',
    mainConfigFile: './public/js/app/config.js',
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
  return gulp.src(['./public/js/app/**/*.js', '!./public/js/app/bower_components/**'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('6to5', function () {
  return gulp.src('./public/js/app/**/*.es6')
    .pipe(to5())
    .pipe(rename({extname: '.js'}))
    .pipe(gulp.dest('./public/js/src'));
});

gulp.task('clean', function(cb) {
  del([
    './public/js/dist/**'
  ], cb);
});

// Increment packages by patch point
gulp.task('bump', function(){
  return gulp.src(['./bower.json', './package.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){

  gulp.watch('./public/css/style.styl', ['css']);
  gulp.watch(['./public/js/app/**/*.js','public/js/app/views/**/*.mustache'], ['js']);

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

