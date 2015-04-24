'use strict';

var istanbul = require('browserify-istanbul');
var isparta  = require('isparta');
var jade  = require('browserify-plain-jade');
var debowerify   = require('debowerify');
var ngAnnotate   = require('browserify-ngannotate');

module.exports = function(config) {

  config.set({

    basePath: '../',
    frameworks: ['jasmine', 'browserify'],
    preprocessors: {
      'src/app/**/*.js': ['browserify', 'babel', 'coverage']
    },
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],

    autoWatch: true,

    browserify: {
      debug: true,
      transform: [
        jade,
        debowerify,
        ngAnnotate,
        'bulkify',
        istanbul({
          instrumenter: isparta,
          ignore: ['**/bower_components/**','**/node_modules/**', '**/test/**']
        })
      ]
    },

    urlRoot: '/',

    files: [
      // 3rd-party resources

      // app-specific code
      'src/app/main.js',

      // test files
      'src/app/**/*.spec.js'
    ]

  });

};
