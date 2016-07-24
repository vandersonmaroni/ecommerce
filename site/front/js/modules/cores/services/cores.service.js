'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function CoresService(requestApiService) {
  this.findCores = function (cb) {
    requestApiService.get(cb, '/cores');
  };
  this.findCoreByPath = function (path, cb) {
    requestApiService.get(cb, '/cores/path/' + path);
  };
}

servicesModule.service('CoresService', CoresService);