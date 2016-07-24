'use strict';

var servicesModule      = require('./_index');

/**
 * @ngInject
 */
function HomeService($http, requestApiService) {
  this.findFeaturedCourses = function (cb) {
    requestApiService.get(cb, '/courses/featured');
  };

  this.findNews = function (cb) {
    requestApiService.get(cb, '/news');
  };

  this.findCoworking = function (cb) {
    requestApiService.get(cb, '/coworking');
  };
}

servicesModule.service('HomeService', HomeService);