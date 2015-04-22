'use strict';
// @ngInject
function Agile(project, sprints) {
  var vm = this;
  vm.project = project.data;
  vm.sprints = sprints.data;
}
module.exports = Agile;
