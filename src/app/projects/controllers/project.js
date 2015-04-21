'use strict';
module.exports = ProjectCtrl;
// @ngInject
function ProjectCtrl($stateParams, $state) {

  var vm = this;

  console.log($stateParams);

  vm.projects = [
    { date: 'ahora', id: 1, key: 'H', name: 'Hewlett-Packard', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam'},
    { date: 'ahora', id: 2, key: 'M', name: 'Mercado Libre', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam'},
    { date: 'ahora', id: 3, key: 'A', name: 'American Express', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { date: 'yesterday', id: 4, key: 'A', name: 'American Airlines', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { date: 'yesterday', id: 5, key: 'A', name: 'Antares', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { date: 'yesterday', id: 6, key: 'H', name: 'HP', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { date: 'yesterday', id: 7, key: 'I', name: 'IBM', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { date: 'friday', id: 8, key: 'S', name: 'Santex', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { date: 'friday', id: 9, key: 'M', name: 'McDonald\'s', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam'}
  ];

  vm.project = vm.projects[$stateParams.id];

}
