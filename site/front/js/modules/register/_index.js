'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var registerModule = [
  'coletivo.Register.controllers',
  'coletivo.Register.services',
  'coletivo.Register.directives',
  'coletivo.Register.factories'
];

module.exports = angular.module('coletivo.Register', registerModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);