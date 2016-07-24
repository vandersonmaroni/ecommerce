'use strict';

var servicesModule      = require('./_index');

/**
 * @ngInject
 */
function CourseDetailingService($http, requestApiService) {
  this.findCourse = function (cb, core, path) {
    requestApiService.get(cb, '/' + core + '/courses/' + path);
  };
}

servicesModule.service('CourseDetailingService',   CourseDetailingService);