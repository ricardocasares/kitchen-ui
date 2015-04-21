'use strict';
var mod = require('./index');
// @ngInject
function Routes($stateProvider) {
  $stateProvider
  .state('app.people', {
    url: '/people',
    controller: require('./controllers/people'),
    template: require('./views/people.jade'),
    title: 'People'
  });
}
mod.config(Routes);
module.exports = Routes;
