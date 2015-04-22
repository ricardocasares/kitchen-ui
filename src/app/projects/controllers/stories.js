'use strict';
// @ngInject
function StoriesCtrl(sprints, stories, $stateParams) {
  var vm = this;
  vm.sprint = sprints.data[$stateParams.sprint -1];
  vm.stories = stories.data;
  vm.filter = "open";
}
module.exports = StoriesCtrl;
