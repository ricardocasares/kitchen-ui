'use strict';

require('angular');
var bulk = require('bulk-require');

module.exports = angular.module('app.home', []);

bulk(__dirname, ['./**/!(*index|*.spec).js']);