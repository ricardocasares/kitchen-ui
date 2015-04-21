'use strict';
module.exports = ProjectCtrl;
// @ngInject
function ProjectCtrl($stateParams, project) {
  var vm = this;
  vm.project = project.data;
}
