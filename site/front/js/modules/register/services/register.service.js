'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function RegisterService($http, requestSignupApiService, AuthService, userParser) {
  this.save = function (user, cb) {
    requestSignupApiService.post(cb, user, '/users');
  };

   this.update = function (user, cb) {
    requestSignupApiService.put(cb, user, '/users/' + user._id);
  };

  this.findByCpf = function (cpf, cb) {
    requestSignupApiService.get(cb, '/users/cpf/' + cpf);
  };

  this.findByUsername = function (username, cb) {
    requestSignupApiService.get(cb, '/users/username/' + username);
  };

  this.findByEmail = function (email, cb) {
    requestSignupApiService.get(cb, '/users/email/' + email);
  };

  this.findById = function (id, cb) {
    requestSignupApiService.get(cb, '/users/' + id);
  };

  this.findByToken = function(cb) {
    requestSignupApiService.get(cb,'/users/token/' + AuthService.token());
  };

  this.facebookRegistration = function (userFB, cb) {
    var user = userParser.parseFromFacebook(userFB);
    requestSignupApiService.post(cb, user, '/users/facebook');
  };

  this.googleRegistration = function (userGoogle, cb) {
    var user = userParser.parseFromGoogle(userGoogle);
    requestSignupApiService.post(cb, user, '/users/google');
  };
}

servicesModule.service('RegisterService', RegisterService);