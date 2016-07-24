'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var mainModule = [
  'coletivo.Main.controllers',
  'coletivo.Main.services',
  'coletivo.Main.directives',
  'coletivo.Main.factories'
];

module.exports = angular.module('coletivo.Main', mainModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);