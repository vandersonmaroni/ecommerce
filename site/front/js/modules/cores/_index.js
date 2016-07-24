'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var coresModule = [
  'coletivo.Cores.controllers',
  'coletivo.Cores.services',
  'coletivo.Cores.directives'
];

module.exports = angular.module('coletivo.Cores', coresModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);