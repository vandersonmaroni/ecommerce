'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var homeModule = [
  'coletivo.Home.controllers',
  'coletivo.Home.directives',
  'coletivo.Home.services'
];

module.exports = angular.module('coletivo.Home', homeModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);