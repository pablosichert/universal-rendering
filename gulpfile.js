"use strict";

var concat        = require('gulp-concat');
var gulp          = require('gulp');
var gulpSequence  = require('gulp-sequence');
var riot          = require('gulp-riot');
var sourcemaps    = require('gulp-sourcemaps');
var uglify        = require('gulp-uglify');

gulp.task('default', gulpSequence('compile-components', 'bundle-client-files'));

gulp.task('compile-components', function() {
  return gulp.src('shared/components/*.tag')
    .pipe(riot())
    .pipe(gulp.dest('tmp/js/components'))
  ;
});

gulp.task('bundle-client-files', function() {
  return gulp.src(['client/vendor/riot/riot.js', 'client/vendor/jquery/dist/jquery.js', 'tmp/js/components/*'])
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js/'))
  ;
});

gulp.task('watch', function() {
  gulp.watch('shared/components/*', ['compile-components', 'bundle-client-files']);
});
