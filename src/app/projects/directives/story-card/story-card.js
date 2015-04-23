'use strict';
var mod = require('../../index');

function StoryCard() {
  return {
    restrict: 'E',
    template: require('./story-card.jade')
  };
}

mod.directive('storyCard', StoryCard);
