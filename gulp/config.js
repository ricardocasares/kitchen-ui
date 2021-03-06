'use strict';

module.exports = {

  serverport: 3000,

  styles: {
    src : 'src/app/**/*.less',
    entry: 'src/app/main.less',
    dest: 'build/css/'
  },

  scripts: {
    src : 'src/app/**/*.js',
    dest: 'build/js'
  },

  images: {
    src : 'src/images/**/*',
    dest: 'build/images'
  },

  fonts: {
    src : [
      'bower_components/**/**/*.eot',
      'bower_components/**/**/*.ttf',
      'bower_components/**/**/*.woff'
    ],
    dest: 'build/fonts'
  },

  views: {
    watch: [
      'src/index.html',
      'src/**/*.less'
    ]
  },

  gzip: {
    src: 'build/**/*.{html,xml,json,css,js,js.map}',
    dest: 'build/',
    options: {}
  },

  dist: {
    root  : 'build'
  },

  browserify: {
    entries: ['./src/app/main.js'],
    bundleName: 'main.js',
    sourcemap : true
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  }

};
