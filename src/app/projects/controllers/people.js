'use strict';
// @ngInject
function PeopleCtrl(people) {
  var vm = this;
  vm.people = people.data;
}
module.exports = PeopleCtrl;
