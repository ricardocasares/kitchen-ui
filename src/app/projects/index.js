'use strict';

require('angular');
require('angular-filter');
var bulk = require('bulk-require');

module.exports = angular.module('app.projects', ['a8m.group-by']);

bulk(__dirname, ['./**/!(*index|*.spec).js']);
