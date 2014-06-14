var gulp = require('gulp')
  , bump = require('gulp-bump')
  , clean = require('gulp-clean')
  , stylus = require('gulp-stylus')
  , notify = require('gulp-notify')
  , jshint = require('gulp-jshint')
  , rjs = require('gulp-requirejs')
  , uglify = require('gulp-uglify')
  , livereload = require('gulp-livereload')
  , lr = require('tiny-lr')
  , server = lr();

gulp.task('css', function(){
  return gulp.src('public/css/style.styl')
    .pipe(stylus({use: ['nib']}))
    .pipe(gulp.dest('public/css'))
    .pipe(livereload(server))
    .pipe(notify({ message: 'css built' }));
});

gulp.task('js', function() {
  return gulp.src(['./public/js/src/**/*.js', '!./public/js/src/bower_components/**'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(rjs({
      out: 'eggshell.dev.js',
      baseUrl: './public/js/src',
      mainConfigFile: './public/js/src/config.js',
      name: 'config',
      optimize: 'none',
      include: 'require-lib',
      useSourceUrl: true
    }))
    .pipe(gulp.dest('./public/js/dist/'))
    .pipe(livereload(server))
    .pipe(notify({ onLast: true, message: 'js built' }));
});
/*
gulp.task('rjs-dev', function() {
  rjs({
    out: 'eggshell.dev.js',
    baseUrl: './public/js/src',
    mainConfigFile: './public/js/src/config.js',
    name: 'config',
    optimize: 'none',
    include: 'require-lib',
    useSourceUrl: true
  })
  .pipe(gulp.dest('./public/js/dist/'))
  .pipe(livereload(server));
});

gulp.task('rjs-prod', function() {
  rjs({
    out: 'eggshell.prod.js',
    baseUrl: './public/js/src',
    mainConfigFile: './public/js/src/config.js',
    name: 'config',
    optimize: 'none',
    include: 'require-lib'
  })
  .pipe(uglify({ outSourceMap: false }))
  .pipe(gulp.dest('./public/js/dist/'))
});
*/

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

  server.listen(35729, function (err) {
    if (err) return console.log(err);

    gulp.watch('./public/css/style.styl', ['css']);
    gulp.watch('./public/js/src/**/*.js', ['js']);

  });

});

gulp.task('default', ['clean'], function(){
  gulp.start('css', 'js', 'bump');
});
