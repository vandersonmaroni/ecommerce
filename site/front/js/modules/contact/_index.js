'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var contactModules = [
  'coletivo.Contact.controllers'
];

module.exports = angular.module('coletivo.Contact', contactModules);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);