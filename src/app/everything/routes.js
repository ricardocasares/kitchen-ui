'use strict';
var mod = require('./index');
/**
 * @ngInject
 */
function Routes($stateProvider) {
  $stateProvider
  .state('app.everything', {
    url: '/everything',
    template: require('./views/everything.jade'),
    title: 'Everything'
  });
}
mod.config(Routes);
module.exports = Routes;
