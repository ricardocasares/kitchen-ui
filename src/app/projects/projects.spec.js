/*global angular */

'use strict';
var AgileCtrl = require('./controllers/agile');
describe('Unit: AgileCtrl', function() {

  var ctrl;
  var story = {
    sprint: 1,
    status: 'open'
  };
  
  var sprint = {
    id: 2,
    stories: []
  };

  beforeEach(function() {
    ctrl = new AgileCtrl(story, sprint);
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('should allow drop a story on a sprint if different ids', function() {
    ctrl.onDrop(false, story, sprint);
    expect(story.sprint).toBe(2);
    expect(sprint.stories.length).toBe(1);
  });

  it('should not allow drop a story on the sprint if story already on sprint', function() {
    ctrl.onDrop(false, story, sprint);
    expect(story.sprint).toBe(2);
    expect(sprint.stories.length).toBe(1);
  });
});
