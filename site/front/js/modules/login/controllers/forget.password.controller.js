'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ForgetPasswordController($scope, showMessageBuilder, ForgetPasswordService) {

  function sendEmailCb (promisse) {
    promisse.then(function (response) {
      showMessageBuilder.info($scope, 'Te enviamos um email para redefinir a senha ;)');
      $scope.email = null;
    });
    promisse.catch(function (response) {
      var message = response.data;
      switch (response.status) {
        case 403:
          showMessageBuilder.error($scope, response.data);
          break;

        case 500:
          console.log('Erro no envio do email');
          console.log(message);
          showMessageBuilder.error($scope, 'Houve um problema para redefinir sua senha :(');
          break;
      }
    });
  }

  $scope.resetPassword = function () {
    ForgetPasswordService.sendEmail($scope.email, sendEmailCb);
  };
}

controllersModule.controller('ForgetPasswordController', ForgetPasswordController);