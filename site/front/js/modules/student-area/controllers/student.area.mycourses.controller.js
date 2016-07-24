'use strict';

var controllersModule = require('./_index');

function statusBusiness(order) {
  var PAYMENT_APROVAL       = {display: 'Aprovado', color: '#448B33', icon: '/build/images/default/layout/icons.svg#icon-payment-success'},
      PAYMENT_PENDING       = {display: 'Pendente', color: '#CA4B00', icon: '/build/images/default/layout/icons.svg#icon-payment-pending'},
      PAYMENT_FAILURE       = {display: 'Não Aprovado', color: '#820C0E', icon: '/build/images/default/layout/icons.svg#icon-payment-failure'};

  var statusCode = order.status;
  switch (true) {
    case (statusCode <= 2) :
      order.status = PAYMENT_PENDING;
      break;
    case (statusCode > 2 && statusCode <= 5):
      order.status = PAYMENT_APROVAL;
      break;
    default:
      order.status = PAYMENT_FAILURE;
  }
}

/**
 * @ngInject
 */
function MyCoursesController($scope, MyCoursesService, RegisterService, PaymentService) {
  function findMyCoursesCb(promisse) {
    promisse.success(function (orders) {
      if (orders.length > 0) {
        for (var i = 0; i < orders.length; i++) {
          statusBusiness(orders[i]);
        }

        $scope.orders = orders;
      } else {
        $scope.message = "Você ainda não adquiriu nenhum curso no coletivo!";
      }
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar os cursos');
      console.log(err);
    });
  }

  function findUserByTokenCb(promisse) {
    promisse.success(function (user) {
      MyCoursesService.findMyCourses(findMyCoursesCb, user._id);
    });
    promisse.error(function (err) {
      console.log('Erro ao realizar a compra');
      console.log(err);
    });
  }

  RegisterService.findByToken(findUserByTokenCb);
}

controllersModule.controller('MyCoursesController', MyCoursesController);