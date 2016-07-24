'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var partnersModule = [
  'coletivo.Partners.controllers',
  'coletivo.Partners.services'
];

module.exports = angular.module('coletivo.Partners', partnersModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);