'use strict';
// @ngInject
function loadingBar (cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
}
module.exports = loadingBar;
