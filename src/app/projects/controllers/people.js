'use strict';
module.exports = PeopleCtrl;
// @ngInject
function PeopleCtrl(people) {
  var vm = this;
  vm.people = people.data;
}
