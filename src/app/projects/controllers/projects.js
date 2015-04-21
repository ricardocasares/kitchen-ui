'use strict';
// @ngInject
function ProjectsCtrl(projects) {
  var vm = this;
  vm.projects = projects.data;
  vm.favourites = vm.projects.slice(3,7);
}
module.exports = ProjectsCtrl;
