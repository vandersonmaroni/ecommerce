'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function SearchService(requestApiService) {
  this.search = function (searchValue, cb) {
    requestApiService.post(cb, {'search':searchValue}, '/search');
  };
}

servicesModule.service('SearchService', SearchService);