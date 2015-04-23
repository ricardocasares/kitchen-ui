'use strict';
var _ = require('underscore');
// @ngInject
function StoriesCtrl(sprints, stories, $stateParams) {
  var vm = this;
  vm.sprints = sprints.data;
  
  vm.stories = stories.data;
  vm.sprints.forEach(function(sprint) {
    sprint.stories = _.where(vm.stories, { sprint: sprint.id });
  });

  vm.sprint = sprints.data[$stateParams.sprint-1] || vm.sprints.backlog;
}
module.exports = StoriesCtrl;
