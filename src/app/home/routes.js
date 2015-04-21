'use strict';
var mod = require('./index');
// @ngInject
function Routes($stateProvider) {
  $stateProvider
  .state('app.home', {
  	url: '/',
  	template: require('./views/home.jade'),
  	controller: function () {}
  });
}
mod.config(Routes);
module.exports = Routes;
