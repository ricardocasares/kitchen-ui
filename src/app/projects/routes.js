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
      // @ngInject
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
      // @ngInject
      project: function ($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.project);
      }
    }
  })
  .state('app.project.discussions', {
    url: '/discussions',
    abstract: true,
    views: {
      'main': {
        template: require('./views/discussion.filters.jade')
      }
    }
  })
  .state('app.project.discussions.recent', {
    url: '/recent',
    controller: require('./controllers/discussions'),
    controllerAs: 'vm',
    template: require('./views/discussion.jade'),
    title: 'Recent discussions',
    resolve: {
      // @ngInject
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
      // @ngInject
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
      // @ngInject
      discussions: function ($http, project, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.id + '/discussions/archived');
      }
    }
  })
  .state('app.project.agile', {
    url: '',
    views: {
      'main': {
        controller: require('./controllers/agile'),
        controllerAs: 'vm',
        template: require('./views/sprint.filters.jade'),
      }
    },
    abstract: true,
    resolve: {
      // @ngInject
      sprints: function ($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.project + '/sprints');
      }
    }
  })
  .state('app.project.agile.backlog', {
    url: '/backlog',
    controller: require('./controllers/stories'),
    controllerAs: 'vm',
    template: require('./views/sprint.jade'),
    title: 'Project backlog',
    resolve: {
      // @ngInject
      stories: function ($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.project + '/backlog');
      }
    }
  })
  .state('app.project.agile.sprint', {
    url: '/sprint/:sprint',
    controller: require('./controllers/stories'),
    controllerAs: 'vm',
    template: require('./views/sprint.jade'),
    title: 'Sprint',
    resolve: {
      // @ngInject
      stories: function ($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.project + '/sprints/' + $stateParams.sprint);
      }
    }
  })
  .state('app.project.agile.sprint.board', {
    url: '/board',
    views: {
      'main@app.project': {
        controller: require('./controllers/board'),
        controllerAs: 'vm',
        template: require('./views/sprint.board.jade')
      }
    },
    title: 'Agile board'
  })
  .state('app.project.people', {
    url: '/people',
    title: 'People on this project',
    views: {
      'main': {
        controller: require('./controllers/people'),
        controllerAs: 'vm',
        template: require('./views/people.jade'),
      }
    },
    resolve: {
      // @ngInject
      people: function ($http, $stateParams) {
        return $http.get('/api/projects/' + $stateParams.project + '/people');
      }
    }
  });
}
Routes.$inject = ['$stateProvider'];
mod.config(Routes);
module.exports = Routes;
