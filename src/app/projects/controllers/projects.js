'use strict';
module.exports = ProjectsCtrl;
// @ngInject
function ProjectsCtrl() {

  var vm = this;
  vm.projects = [
    { id: 1, key: 'H', name: 'Hewlett-Packard', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam'},
    { id: 2, key: 'M', name: 'Mercado Libre', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam'},
    { id: 3, key: 'A', name: 'American Express', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { id: 4, key: 'A', name: 'American Airlines', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { id: 5, key: 'A', name: 'Antares', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { id: 6, key: 'H', name: 'HP', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { id: 7, key: 'I', name: 'IBM', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { id: 8, key: 'S', name: 'Santex', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam error'},
    { id: 9, key: 'M', name: 'McDonald\'s', tag: 'New', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos et quo at. Ipsum quaerat odit labore, debitis facere recusandae nesciunt quisquam'}
  ];

  vm.favourites = vm.projects.slice(3,7);

}
