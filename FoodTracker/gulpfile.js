// Include gulp
var gulp = require('gulp');

// Include Plugins
var wiredep = require('wiredep').stream;
var Server = require('karma').Server;

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
    singleRun: false,
    autoWatch: true
  }, done).start();
});

// Run tests on CI
gulp.task('test-ci', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true

  }, done).start();
});

// Default Task
gulp.task('default', [ 'bower' ]);