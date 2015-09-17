var
  gulp = require('gulp'),
  ngAnnotate = require('gulp-ng-annotate');

gulp.task('ngAnnotate', function () {
  gulp.src([ 'src/**/*.js' ])
    .pipe(ngAnnotate({
      remove: true,
      add: true,
      single_quotes: true
    }))
    .pipe(gulp.dest('src'));
});