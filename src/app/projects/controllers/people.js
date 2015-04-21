'use strict';
module.exports = PeopleCtrl;
// @ngInject
function PeopleCtrl($stateParams) {

  var vm = this;

  vm.people = [
    { name: 'Ricardo Casares' },
    { name: 'Santiago Petrone' },
    { name: 'Lucas Rabuffetti' },
    { name: 'Juan Manuel Gonzalez' },
    { name: 'Juan Carlos Arevalo' },
    { name: 'Agustín Copello' },
  ];
}
