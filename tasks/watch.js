var
  gulp = require('gulp'),
  livereload = require('gulp-livereload');

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./src/**/*.js', [ 'lint', 'ngAnnotate' ]);
  gulp.watch('./src/**/*.*').on('change', livereload.changed);
});