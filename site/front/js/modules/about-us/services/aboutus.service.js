'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function AboutUsService(requestApiService) {
  this.findAboutUs = function (cb) {
    requestApiService.get(cb, '/about-us');
  };
}

servicesModule.service('AboutUsService', AboutUsService);