'use strict';

var controllersModule = require('./_index');

function _verifyEmailAndCpf(user) {
  user.hasEmail = (!user.email || user.email.length === 0);
  user.hasCpf = (!user.cpf || user.cpf.length === 0);
}

/**
 * @ngInject
 */
function MyAccountController($scope, MyAccountService, EmailService, userBuilder, $window, $timeout, showMessageBuilder, AuthService) {
  userBuilder.create($scope);
  function findUser() {
    MyAccountService.findUser(function (promisse) {
      promisse.success(function (user) {
        _verifyEmailAndCpf(user);
        $scope.user = user;
        userBuilder.setArrays($scope);
      });
      promisse.error(function (err) {
        console.log('Erro ao buscar o usuário');
        console.log(err);
      });
    });
  }

  findUser();

  function emailCb (promisse) {
    promisse.error(function (err) {
      showMessageBuilder.error($scope, 'Não conseguimos te enviar o email de confirmação, verifique o Email informado');
      console.log('Erro ao buscar o usuário');
      console.log(err);
    });
  }

  function updateUserCb (promisse) {
    promisse.success(function (user) {
      showMessageBuilder.info($scope, 'Seus dados foram alterados com sucesso, verifique o email de confirmação ;)');
      EmailService.sendUserChange(user, emailCb);
      AuthService.storeToken(user);
      $timeout(function() {
        $window.location.reload();
      }, 4000);
    });
    promisse.error(function (err) {
      showMessageBuilder.error($scope, 'Tivemos um problema ao atualizar seus dados :(');
      console.log('Erro ao buscar o usuário');
      console.log(err);
    });
  }

  $scope.save = function (user) {
    MyAccountService.updateUser(user, updateUserCb);
  };
}

controllersModule.controller('MyAccountController', MyAccountController);