'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var studentAreaModule = [
  'coletivo.StudentArea.controllers',
  'coletivo.StudentArea.services'
];

module.exports = angular.module('coletivo.StudentArea', studentAreaModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);