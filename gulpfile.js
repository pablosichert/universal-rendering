"use strict";

var babelify      = require('babelify');
var browserify    = require('browserify');
var gulp          = require('gulp');
var riotify       = require('riotify');
var source        = require('vinyl-source-stream');

gulp.task('default', ['bundle-client-files']);

gulp.task('bundle-client-files', function() {
  return browserify({
      debug: true,
      entries: ['client/app.js'],
      transform: [babelify, riotify]
    }).bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/js'))
  ;
});

gulp.task('watch', function() {
  gulp.watch('shared/components/*', ['bundle-client-files']);
});
