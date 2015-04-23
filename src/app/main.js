'use strict';

require('angular');

// angular modules
require('angular-ui-router');
require('angular-bootstrap');
require('angular-loading-bar');
require('angular-mocks');
require('angular-drag-and-drop-lists');
require('./home');
require('./people');
require('./projects');
require('./everything');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'dndLists',
    'app.home',
    'app.people',
    'app.projects',
    'app.everything',
    'ngMockE2E'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular
    .module('app')
    .constant('AppSettings', require('./config/constants'))
    .config(require('./config/routes'))
    .config(require('./config/loading-bar'))
    .run(require('./config/run'));

  angular
    .bootstrap(document, ['app']);

});
