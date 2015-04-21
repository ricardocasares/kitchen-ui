'use strict';
// @ngInject
function DiscussionsCtrl(discussions) {
  var vm = this;
  vm.discussions = discussions.data;
}
module.exports = DiscussionsCtrl;
