'use strict';
// @ngInject
function ProjectCtrl($stateParams, project) {
  var vm = this;
  vm.project = project.data;
}
module.exports = ProjectCtrl;
