'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var emailModules = [
  'coletivo.Email.services',
  'coletivo.Email.factories'
];

module.exports = angular.module('coletivo.Email', emailModules);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);