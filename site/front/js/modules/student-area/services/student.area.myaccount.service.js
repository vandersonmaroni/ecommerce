'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function MyAccountService(AuthService, requestSignupApiService) {
  this.findUser = function (cb) {
    requestSignupApiService.get(cb, '/users/token/' + AuthService.token());
  };

  this.updateUser = function (user, cb) {
    requestSignupApiService.put(cb, user, '/users/' + user._id);
  };
}

servicesModule.service('MyAccountService', MyAccountService);