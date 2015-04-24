'use strict';
// @ngInject
function PeopleCtrl(data) {
  var vm = this;
  vm.title = 'People!';
  vm.number = 1234;
  vm.data = data;
}
module.exports = PeopleCtrl;
