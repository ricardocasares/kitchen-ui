'use strict';

require('angular');
require('angular-filter');
var bulk = require('bulk-require');

module.exports = angular.module('app.everything', []);

bulk(__dirname, ['./**/!(*index|*.spec).js']);
