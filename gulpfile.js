// Include gulp and plugins
var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  wiredep = require('wiredep').stream,
  Server = require('karma').Server,
  ngAnnotate = require('gulp-ng-annotate');

var isTravis = process.env.TRAVIS || false;

// Add files from bower to index.html automatically
gulp.task('bower', function () {
  gulp.src('./src/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./src'));
});

// Run tests
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: isTravis,
    autoWatch: true,
    browsers: isTravis ? [ 'PhantomJS' ] : [ 'Chrome' ]
  }, done).start();
});

//Watch task
gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./src/**/*.js',['ngAnnotate']);
  gulp.watch('./src/**/*.*').on('change', livereload.changed);
});

gulp.task('ngAnnotate', function () {
  gulp.src([ 'src/**/*.js'])
    .pipe(ngAnnotate({
      remove: true,
      add: true,
      single_quotes: true
    }))
    .pipe(gulp.dest('src'))
})

// Default Task
gulp.task('default', [ 'bower', 'livereload' ]);