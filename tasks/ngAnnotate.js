var
  gulp = require('gulp'),
  ngAnnotate = require('gulp-ng-annotate');

//note: use /*@ngInject*/ in needed modules
gulp.task('ngAnnotate', function () {
  gulp.src([ 'src/**/*.js' ])
    .pipe(ngAnnotate({
      remove: true,
      add: true,
      single_quotes: true
    }))
    .pipe(gulp.dest('src'));
});