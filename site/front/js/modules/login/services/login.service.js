'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function LoginService($http, requestSiginApiService) {
  this.sigin = function (user, cb) {
    requestSiginApiService.post(cb, user, '/login');
  };
}

servicesModule.service('LoginService', LoginService);