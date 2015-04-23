'use strict';
// @ngInject
function BoardCtrl(project, stories) {
  var vm = this;
  var keyOrderMap = {};
  var statuses = project.data.settings.agile.statuses;
  vm.swimlanes = {};
  
  activate();
  
  function activate() {
    statuses.forEach(function(status) {
      keyOrderMap[status.key] = status.order;
      vm.swimlanes[status.order] = {
        lane: status.key,
        name: status.name,
        stories: []
      };
    });

    stories.data.forEach(function(story) {
      if(vm.swimlanes[keyOrderMap[story.status]].lane === story.status) {
        vm.swimlanes[keyOrderMap[story.status]].stories.push(story);
      }
    });
  }
}
module.exports = BoardCtrl;
