'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ContactController($scope, EmailService, showMessageBuilder) {
  function sendCb (promisse) {
    promisse.success(function (success) {
      $scope.emailMessage = undefined;
      $scope.buttonDisabled = false;
      showMessageBuilder.info($scope, 'E-mail enviado com sucesso, aguarde contato ;)');
      $scope.body = {};
    });

    promisse.error(function (err) {
      showMessageBuilder.error($scope, 'Não conseguimos te enviar o e-mail, por favor tente novamente mais tarde');
      console.log('Erro ao enviar email');
      console.log(err);
    });
  }

  $scope.send = function (body) {
    $scope.buttonDisabled = true;
    $scope.emailMessage = 'Aguarde, estamos enviando o email...';
    EmailService.sendContact(body, sendCb);
  };
}

controllersModule.controller('ContactController', ContactController);