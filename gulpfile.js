var gulp = require('gulp')
  , gutil = require('gulp-util')
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

gulp.task('rjs', function() {
  rjs({
    baseUrl: './public/js/src',
    out: 'eggshell.dev.js',
    mainConfigFile: './public/js/src/config.js',
    //useSourceUrl: true,
    //optimize: 'none',
    //generateSourceMaps: true,
    name: 'config',
    include: 'requireLib'
  })
  //.pipe(uglify())
  .pipe(gulp.dest('./public/js/dist/'))
  .pipe(refresh(server));;
});

gulp.task('dev', function(){

  gulp.run('livereload', 'stylus');

  gulp.watch('./public/css/style.styl', function(ev){
    gulp.run('stylus')
  });

  gulp.watch('./public/js/src/**/*.js', function(ev){
    gulp.run('lint', 'rjs')
  });

});

gulp.task('default', function(){
  gulp.run('stylus', 'rjs');
});
