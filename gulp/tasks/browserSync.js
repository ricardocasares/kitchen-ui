'use strict';

var config      = require('../config');
var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', function() {

  browserSync({
    ui: 3001,
    proxy: 'localhost:' + config.serverport
  });

});
