var gulp = require('gulp'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream');

gulp.task('browserify', function () {
  // Grabs the app.js file
  return browserify('src/app.js')
    // bundles it and creates a file called main.js
    .bundle()
    .pipe(source('main.js'))
    // saves it the public/js/ directory
    .pipe(gulp.dest('src'));
})