'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var searchModule = [
  'coletivo.Search.directives',
  'coletivo.Search.services',
];

module.exports = angular.module('coletivo.Search', searchModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);