'use strict';
// @ngInject
function BoardCtrl(project, stories) {
  var vm = this;
  var keyOrderMap = {};
  var statuses = project.data.settings.agile.statuses;
  vm.swimlanes = {};
  vm.onDrop = onDrop;
  vm.onMoved = onMoved;
  
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
      if(vm.swimlanes[keyOrderMap[story.status]] && vm.swimlanes[keyOrderMap[story.status]].lane === story.status) {
        vm.swimlanes[keyOrderMap[story.status]].stories.push(story);
      }
    });
  }

  function onMoved (event, index, story) {
    console.log(event, index, story);
  }

  function onDrop (event, index, item, lane) {
    console.log(event, index, item, lane);
    item.status = lane;
    return item;
  }
}

module.exports = BoardCtrl;
