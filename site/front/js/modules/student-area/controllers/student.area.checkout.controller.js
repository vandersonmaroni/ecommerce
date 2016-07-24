'use strict';

var controllersModule = require('./_index');

function _verifyEmailAndCpf(user) {
  user.hasEmail = (!user.email || user.email.length === 0);
  user.hasCpf = (!user.cpf || user.cpf.length === 0);
}

/**
 * @ngInject
 */
function CheckoutController($scope, $window, $document, $location, $timeout, AuthService, userBuilder, CheckoutService, RegisterService, MyAccountService, PaymentService, showMessageBuilder) {
  userBuilder.create($scope);
  $scope.order = JSON.parse(CheckoutService.findOrder());
  console.log($scope.order);
  $document.scrollTop(0, 200);

  function findUserByTokenCb (promisse) {
    promisse.success(function (user) {
      _verifyEmailAndCpf(user);
      $scope.user = user;
      $scope.order.user = user;
      userBuilder.setArrays($scope);
    });
    promisse.error(function (err) {
      console.log('Erro ao realizar a compra');
      console.log(err);
    });
  }

  function purchaseCb(promisse) {
    $scope.purchaseMessage = 'Aguarde você será direcionado para o Pagseguro para finalizar a compra';

    promisse.success(function (order) {
      $scope.order = order;
      $window.location.href = order.goToPayment;
    });
    promisse.error(function (err) {
      showMessageBuilder.error($scope, 'Houve um problema ao realizar a compra, por favor tenta novamente mais tarde :(');
      console.log('Erro ao realizar a compra');
      console.log(err);
    });
  }

  function purchase() {
    var order =  $scope.order;
    order.user = $scope.user;
    PaymentService.purchase(purchaseCb, order);
  }

  function updateUserCb (promisse) {
    promisse.success(function (user) {
      showMessageBuilder.info($scope, 'Seus dados foram atualizados ;)');
      AuthService.storeToken(user);
      $scope.clicked = true;
      $timeout(function() {
        purchase();
      }, 4000);
    });
    promisse.error(function (err) {
      showMessageBuilder.error($scope, 'Tivemos um problema ao atualizar seus dados :(');
      console.log('Erro ao buscar o usuário');
      console.log(err);
    });
  }

  $scope.updateUser =  function(user) {
    if (!$scope.clicked) {
      MyAccountService.updateUser(user, updateUserCb);
    }

  };

  RegisterService.findByToken(findUserByTokenCb);
}

controllersModule.controller('CheckoutController', CheckoutController);