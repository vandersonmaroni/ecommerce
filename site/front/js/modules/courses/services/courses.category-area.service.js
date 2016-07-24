'use strict';

var servicesModule      = require('./_index');

/**
 * @ngInject
 */
function categoryAreasService($http, requestApiService) {
  this.findCategoryAreas = function (cb) {
    requestApiService.get(cb, '/category-areas');
  };
}

servicesModule.service('categoryAreasService', categoryAreasService);