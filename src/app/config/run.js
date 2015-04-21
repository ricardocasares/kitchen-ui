'use strict';
// @ngInject
function OnRun($rootScope, AppSettings) {

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    $rootScope.pageTitle = '';

    if ( toState.title ) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' · ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });

}

module.exports = OnRun;