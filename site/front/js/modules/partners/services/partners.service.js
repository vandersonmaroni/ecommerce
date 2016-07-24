'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function partnersService(requestApiService) {
  this.findPartners = function (cb) {
    requestApiService.get(cb, '/partners');
  };
}

servicesModule.service('partnersService', partnersService);