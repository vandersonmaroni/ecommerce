'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function RegisterController($scope, documentValidate, $location, RegisterService, showMessageBuilder, EmailService, userBuilder, $facebook, GooglePlus, AuthService) {
  userBuilder.create($scope);

  function emailCb(promisse) {
    promisse.success(function () {
      $scope.emailMessage = "Te enviamos um email de confirmação de cadastro";
    });
    promisse.error(function (err) {
      showMessageBuilder.error($scope, 'Não conseguimos te enviar o e-mail de confirmação :(');
      console.log('Erro ao enviar email de confirmação');
      console.log(err);
    });
  }

  function saveCb(promisse) {
    promisse.success(function (user) {
      showMessageBuilder.info($scope, 'Cadastro realizado com sucesso :)');
      EmailService.sendRegisterConfirmation(emailCb, user);
      userBuilder.create($scope);
    });
    promisse.error(function (err) {
      showMessageBuilder.error($scope, 'Tivemos um problema no cadastro, por favor tente novamente mais tarde :(');
      console.log('Erro ao salvar o usuário');
      console.log(err);
    });
  }

  $scope.save = function (user) {
    RegisterService.save(user, saveCb);
  };

  function socialRegistrationCb (promisse) {
    promisse.then(function (response) {
      var user = response.data;
      AuthService.storeToken(user);
      $location.path($scope.systemUri.myCourses());
    });
    promisse.catch(function (response) {
      showMessageBuilder.error($scope, 'Houve um problema no login, por favor tente novamente mais tarde :(');
    });
  }

  function findFacebookUserFields (response) {
    if (response.status === 'connected') {
      $facebook.api("/me", {fields: 'id, name, email, gender'}).then(
        function(userFB) {
          RegisterService.facebookRegistration(userFB, socialRegistrationCb);
        },
        function(err) {
          showMessageBuilder.error($scope, 'Não conseguimos nos conectar ao seu facebook :(');
        });
    } else {
      showMessageBuilder.error($scope, 'Não conseguimos nos conectar ao seu facebook :(');
    }
  }

  $scope.fbLogin = function () {
    $facebook.login().then(
      function(response) {
        findFacebookUserFields(response);
      },
      function(err) {
        console.log('erro no login');
        console.log(err);
      });
  };

  $scope.googleLogin = function () {
    GooglePlus.login().then(function (authResult) {
        GooglePlus.getUser().then(function (userGoogle) {
          RegisterService.googleRegistration(userGoogle, socialRegistrationCb);
        });
    }, function (err) {
        console.log('Erro ao logar com o google');
        console.log(err);
        showMessageBuilder.error($scope, 'Não conseguimos nos conectar a sua conta do Google :(');
    });
  };
}

controllersModule.controller('RegisterController', RegisterController);