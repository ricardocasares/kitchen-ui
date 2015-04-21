'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var less         = require('gulp-less');
var gulpif       = require('gulp-if');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {

  return gulp.src(config.styles.src)
    .pipe(less())
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));

});