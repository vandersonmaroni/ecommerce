'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function requestSignupApiService($http, $location) {
  function requestGetDev (cb, route) {
    var promisse = $http.get('/api/system/uri/signupapi');
    promisse.success(function (uri) {
      cb($http.get(uri + route));
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar recursos de: ' + route);
      console.log(err);
    });
  }

  function requestGetProd (cb, route) {
    var uri = 'https://coletivoeducacao.com.br/api/signup';
    cb($http.get(uri + route));
  }

  function requestPostDev (cb, data, route) {
    var promisse = $http.get('/api/system/uri/signupapi');
    promisse.success(function (uri) {
      cb($http.post(uri + route, data));
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar recursos de: ' + route);
      console.log(err);
    });
  }

  function requestPostProd (cb, data, route) {
    var uri = 'https://coletivoeducacao.com.br/api/signup';
    cb($http.post(uri + route, data));
  }

  function requestPutDev (cb, data, route) {
    var promisse = $http.get('/api/system/uri/signupapi');
    promisse.success(function (uri) {
      cb($http.put(uri + route, data));
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar recursos de: ' + route);
      console.log(err);
    });
  }

  function requestPutProd (cb, data, route) {
    var uri = 'https://coletivoeducacao.com.br/api/signup';
    cb($http.put(uri + route, data));
  }

  return {
    get: ($location.$$port === 443 || $location.$$port === 80) ? requestGetProd : requestGetDev,
    put: ($location.$$port === 443 || $location.$$port === 80) ? requestPutProd : requestPutDev,
    post: ($location.$$port === 443 || $location.$$port === 80) ? requestPostProd : requestPostDev
  };
}

factoriesModule.factory('requestSignupApiService', requestSignupApiService);