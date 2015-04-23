'use strict';
// @ngInject
function Agile(project, sprints) {
  var vm = this;
  vm.project = project.data;
  vm.sprints = sprints.data;
  vm.onDrop = onDrop;

  function onDrop (event, story, sprint) {
    if(story.sprint !== sprint.id) {
      story.sprint = sprint.id;
      sprint.stories.push(story);
    }
  }
}
module.exports = Agile;
