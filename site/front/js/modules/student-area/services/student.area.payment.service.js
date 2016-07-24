'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function PaymentService(requestPaymentApiService) {
  this.purchaseConfirmation = function (cb, params) {
    requestPaymentApiService.get(cb, '/order/' + params);
  };

  this.purchase = function (cb, order) {
    requestPaymentApiService.post(cb, order, '/checkout');
  };

  this.statusOrder = function (cb, transactionCode) {
    requestPaymentApiService.get(cb, '/transaction/' + transactionCode);
  }
}

servicesModule.service('PaymentService', PaymentService);