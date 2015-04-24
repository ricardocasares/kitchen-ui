'use strict';
// @ngInject
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
  	.state('app', {
  		url: '',
  		abstract: true,
  		template: '<ui-view></ui-view>'//require('../layout.jade'),
  	});

  $urlRouterProvider.otherwise('/');
}
module.exports = Routes;
