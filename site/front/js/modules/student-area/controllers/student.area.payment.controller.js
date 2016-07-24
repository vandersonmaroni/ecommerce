'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PaymentController($scope, PaymentService, $routeParams, showMessageBuilder) {
  function findOrdemCb (promisse) {
    promisse.success(function (order) {
      $scope.order = order;
    });

    promisse.error(function (err) {
      console.log('Erro ao buscar a ordem');
      console.log(err);
      showMessageBuilder.warn($scope, 'Houve um problema ao recuperar a ordem do pedido, atualize a tela e tente novamente.');
    });
  }

  function statusBusiness(statusPagseguro) {
    var PAYMENT_APROVAL       = {display: 'Aprovado', color: '#448B33', icon: '/build/images/default/layout/icons.svg#icon-payment-success'},
        PAYMENT_PENDING       = {display: 'Pendente', color: '#CA4B00', icon: '/build/images/default/layout/icons.svg#icon-payment-pending'},
        PAYMENT_FAILURE       = {display: 'Não Aprovado', color: '#820C0E', icon: '/build/images/default/layout/icons.svg#icon-payment-failure'};

    var statusCode = statusPagseguro.status.code;
    switch (true) {
      case (statusCode <= 2) :
        $scope.order.status = PAYMENT_PENDING;
        break;
      case (statusCode > 2 && statusCode <= 5):
        $scope.order.status = PAYMENT_APROVAL;
        break;
      default:
        $scope.order.status = PAYMENT_FAILURE;
    }
  }

  function resquestOrderStatusCb(promisse) {
    promisse.success(function (transaction) {
      statusBusiness(transaction);
    });

    promisse.error(function (err) {
      console.log('Erro ao recuperar o status da ordem');
      console.log(err);
    });
  }

  PaymentService.purchaseConfirmation(findOrdemCb, $routeParams.idordem + "?transactioncode=" + $routeParams.transactioncode);
  PaymentService.statusOrder(resquestOrderStatusCb, $routeParams.transactioncode);
}

controllersModule.controller('PaymentController', PaymentController);