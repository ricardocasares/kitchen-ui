'use strict';
// @ngInject
function OnRun($rootScope, AppSettings, $httpBackend) {
  

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    $rootScope.pageTitle = '';

    if ( toState.title ) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' · ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });
  var projects = require('../../../test/fixtures/projects.json');
  var discussions = require('../../../test/fixtures/discussions.json');
  var agile = require('../../../test/fixtures/agile.json');
  var people = require('../../../test/fixtures/people.json');
  
  $httpBackend.whenGET('/api/projects').respond(function(method, url, data) {
    console.log(method, url, data);
    return [200, projects, {}];
  });

  $httpBackend.whenGET(/api\/projects\/(\d)\/(agile)/).respond(function(method, url, data){
    console.log(method, url, data);
    return [200, agile, {}];
  });

  $httpBackend.whenGET(/api\/projects\/(\d)\/(discussions)/).respond(function(method, url, data){
    console.log(method, url, data);
    return [200, discussions, {}];
  });

  $httpBackend.whenGET(/api\/projects\/(\d)\/(people)/).respond(function(method, url, data){
    console.log(method, url, data);
    return [200, people, {}];
  });

  $httpBackend.whenGET(/api\/projects\/([0-9])/).respond(function(method, url, data){
    console.log(method, url, data);
    return [200, projects[url.split('/')[3]-1], {}];
  });
}
module.exports = OnRun;
