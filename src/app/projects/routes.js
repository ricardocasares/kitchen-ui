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
    url: '/projects/:project',
    abstract: true,
    controller: require('./controllers/project'),
    controllerAs: 'vm',
    template: require('./views/project.jade'),
    resolve: {
      project: function ($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.project);
      }
    }
  })
  .state('app.project.discussions', {
    url: '/discussions',
    abstract: true,
    template: require('./views/discussion.filters.jade'),
  })
  .state('app.project.discussions.recent', {
    url: '/recent',
    controller: require('./controllers/discussions'),
    controllerAs: 'vm',
    template: require('./views/discussion.jade'),
    title: 'Recent discussions',
    resolve: {
      discussions: function ($http, project, $stateParams) {
        return $http.get('/api/projects/' + project.data.id + '/discussions/recent');
      }
    }
  })
  .state('app.project.discussions.all', {
    url: '/all',
    controller: require('./controllers/discussions'),
    controllerAs: 'vm',
    template: require('./views/discussion.jade'),
    title: 'All discussions',
    resolve: {
      discussions: function ($http, project, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.id + '/discussions/all');
      }
    }
  })
  .state('app.project.discussions.archived', {
    url: '/archived',
    controller: require('./controllers/discussions'),
    controllerAs: 'vm',
    template: require('./views/discussion.jade'),
    title: 'Archived discussions',
    resolve: {
      discussions: function ($http, project, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.id + '/discussions/archived');
      }
    }
  })
  .state('app.project.backlog', {
    url: '/backlog',
    controller: require('./controllers/sprints'),
    controllerAs: 'vm',
    template: require('./views/sprint.filters.jade'),
    title: 'Agile management',
    resolve: {
      sprints: function ($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.project + '/sprints');
      },
      stories: function($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.project + '/backlog');
      }
    }
  })
  .state('app.project.backlog.sprint', {
    url: '/:sprint',
    controller: require('./controllers/stories'),
    controllerAs: 'vm',
    template: require('./views/sprint.jade'),
    title: 'Agile management',
    resolve: {
      stories: function ($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.project + '/sprints/' + $stateParams.sprint);
      }
    }
  })
  .state('app.project.backlog.sprint.board', {
    url: '/board',
    controller: require('./controllers/sprints'),
    controllerAs: 'vm',
    template: require('./views/sprint.board.jade'),
    title: 'Agile management',
    resolve: {
      sprints: function ($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.project + '/sprints/' + $stateParams.sprint);
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
        return $http.get('/api/projects/' + $stateParams.project + '/people');
      }
    }
  });
}
Routes.$inject = ['$stateProvider'];
mod.config(Routes);
module.exports = Routes;
