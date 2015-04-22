'use strict';
// @ngInject
function ProjectsCtrl(projects) {
  var vm = this;
  vm.projects = projects.data;
  vm.favourites = vm.projects.slice(1,5);
}
module.exports = ProjectsCtrl;
