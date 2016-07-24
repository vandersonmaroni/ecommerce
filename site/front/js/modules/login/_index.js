'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var loginModule = [
  'coletivo.Login.controllers',
  'coletivo.Login.services'
];

module.exports = angular.module('coletivo.Login', loginModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);