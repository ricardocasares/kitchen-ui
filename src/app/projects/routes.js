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
    title: 'Projects',
    resolve: {
      projects: function ($http) {
        return $http.get('/api/projects');
      }
    }
  })
  .state('app.project', {
    url: '/projects/:id',
    abstract: true,
    controller: require('./controllers/project'),
    controllerAs: 'vm',
    template: require('./views/project.jade'),
    resolve: {
      project: function ($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.id);
      }
    }
  })
  .state('app.project.discussions', {
    url: '/discussions',
    controller: require('./controllers/discussions'),
    controllerAs: 'vm',
    template: require('./views/discussions.jade'),
    title: 'Project discussions',
    resolve: {
      discussions: function ($http, project, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.id + '/discussions');
      }
    }
  })
  .state('app.project.agile', {
    url: '/agile',
    controller: require('./controllers/agile'),
    controllerAs: 'vm',
    template: require('./views/agile.jade'),
    title: 'Agile management',
    resolve: {
      sprints: function ($http, project, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.id + '/agile');
      }
    }
  })
  .state('app.project.people', {
    url: '/people',
    controller: require('./controllers/people'),
    controllerAs: 'vm',
    template: require('./views/people.jade'),
    title: 'People on this project',
    resolve: {
      people: function ($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.id + '/people');
      }
    }
  });
}
Routes.$inject = ['$stateProvider'];
mod.config(Routes);
module.exports = Routes;
