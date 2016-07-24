'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var teachersModule = [
  'coletivo.Teachers.controllers',
  'coletivo.Teachers.services'
];

module.exports = angular.module('coletivo.Teachers', teachersModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);