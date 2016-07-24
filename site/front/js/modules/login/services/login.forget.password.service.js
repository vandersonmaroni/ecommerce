'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function ForgetPasswordService($http, requestSiginApiService) {
  this.sendEmail = function (email, cb) {
    requestSiginApiService.post(cb, {'email':email}, '/login/reset-password');
  };

  this.saveNewPassword = function (password, token, cb) {
    console.log(token);
    requestSiginApiService.post(cb, {'password':password, 'token':token}, '/login/save-password');
  };
}

servicesModule.service('ForgetPasswordService', ForgetPasswordService);