'use strict';
// @ngInject
function BoardCtrl(project, stories) {
  var vm = this;
  var keyOrderMap = {};
  var statuses = project.data.settings.agile.statuses;
  
  vm.swimlanes = {};
  vm.dropSuccess = dropSuccess;
  
  activate();
  
  function activate() {
    statuses.forEach(function(status) {
      keyOrderMap[status.key] = status.order;
      vm.swimlanes[status.order] = {
        key: status.key,
        name: status.name,
        stories: {}
      };
    });

    stories.data.forEach(function(story) {
      vm.swimlanes[keyOrderMap[story.status]].stories[story.id] = story;
    });
  }

  function dropSuccess(story, dropzone) {
    if(story.status !== dropzone.key) {
      delete vm.swimlanes[keyOrderMap[story.status]].stories[story.id];
      vm.swimlanes[keyOrderMap[dropzone.key]].stories[story.id] = story;
      story.status = dropzone.key;
    }
  }
}
module.exports = BoardCtrl;
