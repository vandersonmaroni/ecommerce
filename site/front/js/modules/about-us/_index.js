'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var aboutUsModule = [
  'coletivo.AboutUs.controlller',
  'coletivo.AboutUs.service',
];

module.exports = angular.module('coletivo.AboutUs', aboutUsModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);