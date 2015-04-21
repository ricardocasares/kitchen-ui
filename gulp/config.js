'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'src/app/main.less',
    'dest': 'build/css/'
  },

  'scripts': {
    'src' : 'src/app/**/*.js',
    'dest': 'build/js'
  },

  'images': {
    'src' : 'src/images/**/*',
    'dest': 'build/images'
  },

  'fonts': {
    'src' : [
      'bower_components/semantic-ui/**/**/*.eot',
      'bower_components/semantic-ui/**/**/*.ttf',
      'bower_components/semantic-ui/**/**/*.woff'
    ],
    'dest': 'build/fonts'
  },

  'views': {
    'watch': [
      'src/index.html',
      'src/**/*.less'
    ]
  },

  'gzip': {
    'src': 'build/**/*.{html,xml,json,css,js,js.map}',
    'dest': 'build/',
    'options': {}
  },

  'dist': {
    'root'  : 'build'
  },

  'browserify': {
    'entries'   : ['./src/app/main.js'],
    'bundleName': 'main.js',
    'sourcemap' : true
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};
