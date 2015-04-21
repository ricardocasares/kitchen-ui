'use strict';
module.exports = DiscussionsCtrl;
// @ngInject
function DiscussionsCtrl(discussions) {

  var vm = this;
  vm.discussions = discussions.data;


}
