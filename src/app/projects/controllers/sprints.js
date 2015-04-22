'use strict';
// @ngInject
function SprintsCtrl(project, sprints, $stateParams) {
  var vm = this;
  vm.project = project.data;
  vm.sprints = sprints.data;
  vm.sprint = $stateParams.sprint;
}
module.exports = SprintsCtrl;
