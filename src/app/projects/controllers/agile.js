'use strict';
// @ngInject
function AgileCtrl($stateParams, sprints) {
  var vm = this;
  vm.board = false;
  vm.stories = sprints.data;
}
module.exports = AgileCtrl;
