'use strict';
var mod = require('./index');
// @ngInject
function Routes($stateProvider) {
  $stateProvider
  .state('app.projects', {
    url: '/projects',
    controller: require('./controllers/projects'),
    controllerAs: 'vm',
    template: require('./views/projects.jade'),
    title: 'Projects'
  })
  .state('app.project', {
    url: '/projects/:id',
    abstract: true,
    controller: require('./controllers/project'),
    controllerAs: 'vm',
    template: require('./views/project.jade')
  })
  .state('app.project.discussions', {
    url: '/discussions',
    controller: require('./controllers/discussions'),
    controllerAs: 'vm',
    template: require('./views/discussions.jade')
  })
  .state('app.project.agile', {
    url: '/agile',
    controller: require('./controllers/agile'),
    controllerAs: 'vm',
    template: require('./views/agile.jade')
  })
  .state('app.project.people', {
    url: '/people',
    controller: require('./controllers/people'),
    controllerAs: 'vm',
    template: require('./views/people.jade')
  });
}
mod.config(Routes);
module.exports = Routes;
