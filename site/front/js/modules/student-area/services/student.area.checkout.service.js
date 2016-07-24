'use strict';

var servicesModule      = require('./_index');

/**
 * @ngInject
 */
function CheckoutService($http, requestApiService, requestPaymentApiService, $window) {
  this.storageOrder = function (order) {
    $window.sessionStorage.order = order;
  };

  this.findOrder = function () {
    return $window.sessionStorage.order;
  };

  this.purchase = function (cb, order) {
    requestPaymentApiService.post(cb, order, '/checkout');
  };
}

servicesModule.service('CheckoutService',   CheckoutService);