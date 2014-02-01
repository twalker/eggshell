var gulp = require('gulp')
  , bump = require('gulp-bump')
  , clean = require('gulp-clean')
  , stylus = require('gulp-stylus')
  , watch = require('gulp-watch')
  , jshint = require('gulp-jshint')
  , rjs = require('gulp-requirejs')
  , uglify = require('gulp-uglify')
  , refresh = require('gulp-livereload')
  , lr = require('tiny-lr')
  , server = lr();

gulp.task('clean', function() {
  gulp.src(['./public/js/dist/'], {read: false})
    .pipe(clean());
});

gulp.task('livereload', function(){
  server.listen(35729, function(err){
    if(err) return console.log(err);
  });
});

gulp.task('stylus', function(){
  gulp.src('public/css/style.styl')
  .pipe(stylus({use: ['nib']}))
  .pipe(gulp.dest('public/css'))
  .pipe(refresh(server));
});

gulp.task('lint', function() {
  gulp.src(['./public/js/src/**/*.js', '!./public/js/src/bower_components/**'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('rjs-dev', function() {
  rjs({
    out: 'eggshell.dev.js',
    baseUrl: './public/js/src',
    mainConfigFile: './public/js/src/config.js',
    name: 'config',
    optimize: 'none',
    include: 'requireLib',
    useSourceUrl: true
  })
  .pipe(gulp.dest('./public/js/dist/'))
  .pipe(refresh(server));
});

gulp.task('rjs-prod', function() {
  rjs({
    out: 'eggshell.prod.js',
    baseUrl: './public/js/src',
    mainConfigFile: './public/js/src/config.js',
    name: 'config',
    optimize: 'none',
    include: 'requireLib'
  })
  .pipe(uglify({ outSourceMap: false }))
  .pipe(gulp.dest('./public/js/dist/'))
});

// Update bower, component, npm at once:
gulp.task('bump', function(){
  gulp.src(['./bower.json', './package.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

gulp.task('dev', function(){

  gulp.run('livereload');

  gulp.watch('./public/css/style.styl', function(){
    gulp.run('stylus');
  });

  gulp.watch('./public/js/src/**/*.js', function(){
    gulp.run('lint', 'rjs-dev');
  });

});

gulp.task('default', function(){
  gulp.run('clean', 'stylus', 'rjs-dev', 'rjs-prod', 'bump');
});
