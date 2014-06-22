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
  livereload = require('gulp-livereload'),
  lr = require('tiny-lr'),
  server = lr();

gulp.task('css', function(){
  return gulp.src('public/css/style.styl')
    .pipe(stylus({use: [nib()], import: ['nib']}))
    .pipe(gulp.dest('public/css'))
    .pipe(livereload(server))
});

// gulp.task('js', function() {
//   return gulp.src(['./public/js/src/**/*.js', '!./public/js/src/bower_components*'])
//     .pipe(jshint('.jshintrc'))
//     .pipe(jshint.reporter('jshint-stylish'))
//     .pipe(rjs({
//       out: 'eggshell.js',
//       baseUrl: './public/js/src',
//       mainConfigFile: './public/js/src/config.js',
//       name: 'config',
//       optimize: 'none',
//       include: 'require-lib',
//       useSourceUrl: true
//     }))
//     .pipe(gulp.dest('./public/js/dist/dev/'))
//     .pipe(livereload(server))
// });


gulp.task('js', ['lint', 'rjs']);

gulp.task('lint', function() {
  return gulp.src(['./public/js/src/**/*.js', '!./public/js/src/bower_components/**'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});


gulp.task('rjs', ['lint'], function(){
  rjs({
    out: 'eggshell.js',
    baseUrl: './public/js/src',
    mainConfigFile: './public/js/src/config.js',
    name: 'config',
    optimize: 'none',
    include: 'require-lib',
    useSourceUrl: true
  })
  .pipe(gulp.dest('./public/js/dist/dev/'))
  .pipe(livereload(server));
});


gulp.task('minify', ['js'], function() {
  gulp.src(['./public/js/dist/dev/eggshell.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/dist/prod/'))
});

gulp.task('clean', function() {
  return gulp.src(['./public/js/dist/'], {read: false})
    .pipe(clean());
});

// Increment packages by patch point
gulp.task('bump', function(){
  gulp.src(['./bower.json', './package.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
  server.listen(35729, function(err) {
    if (err) return console.log(err);
    gulp.watch('./public/css/style.styl', ['css']);
    gulp.watch('./public/js/src/**/*.js', ['js']);
  });

});

gulp.task('default', ['clean', 'css', 'js']);

gulp.task('build', ['clean', 'css', 'js', 'minify', 'bump']);

