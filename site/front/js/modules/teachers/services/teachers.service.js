'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function TeachersService(requestApiService) {
  this.findTeachers = function (cb) {
    requestApiService.get(cb, '/teachers');
  };
}

servicesModule.service('TeachersService', TeachersService);