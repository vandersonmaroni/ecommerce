'use strict';

var angular           = require('angular');
var bulk              = require('bulk-require');

var coursesModule = [
  'coletivo.Courses.controllers',
  'coletivo.Courses.directives',
  'coletivo.Courses.services'
];

module.exports = angular.module('coletivo.Courses', coursesModule);

bulk(__dirname, ['./**/!(*_index|*.spec).js']);