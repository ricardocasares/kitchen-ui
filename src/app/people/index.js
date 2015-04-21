'use strict';

require('angular');
var bulk = require('bulk-require');

module.exports = angular.module('app.people', []);

bulk(__dirname, ['./**/!(*index|*.spec).js']);