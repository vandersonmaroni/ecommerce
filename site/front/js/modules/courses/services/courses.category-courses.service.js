'use strict';

var servicesModule      = require('./_index');

/**
 * @ngInject
 */
function CategoryCoursesService($http, requestApiService) {
  this.findCategoryAreas = function (cb, core, path) {
    requestApiService.get(cb, '/' + core + '/category-areas/' + path);
  };

  this.findCategoryByName = function (path, cb) {
    requestApiService.get(cb, '/courses/category/path/' + path);
  };
}

servicesModule.service('CategoryCoursesService', CategoryCoursesService);