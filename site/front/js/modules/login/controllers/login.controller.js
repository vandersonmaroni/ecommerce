'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function LoginController($scope, $facebook, GooglePlus, showMessageBuilder, RegisterService, LoginService, AuthService, $location) {
  $scope.passwordHide = true;
  $scope.user = {};

  function handlerError (response) {
    var message = response.data;
    switch (response.status) {
      case 403:
        showMessageBuilder.error($scope, response.data);
        break;

      case 500:
        console.log('Erro no login');
        console.log(message);
        showMessageBuilder.error($scope, 'Houve um problema no login, por favor tente novamente mais tarde :(');
        break;
    }
  }

  $scope.goToRegister = function () {
    $location.path($scope.systemUri.register());
  };

  $scope.goToForgetPassword = function () {
    $location.path($scope.systemUri.forgetPassword());
  };

  $scope.passwordToggle = function () {
    $scope.passwordHide = !$scope.passwordHide;
  };

  function loginCb(promisse) {
    promisse.then(function (response) {
      var user = response.data;
      AuthService.storeToken(user);
      $location.path($scope.systemUri.myCourses());
    });
    promisse.catch(function (response) {
      handlerError(response);
    });
  }

  $scope.login = function (user) {
    LoginService.sigin(user, loginCb);
  };

  function socialRegistrationCb (promisse) {
    promisse.then(function (response) {
      var user = response.data;
      AuthService.storeToken(user);
      $location.path($scope.systemUri.myCourses());
    });
    promisse.catch(function (response) {
      handlerError(response);
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

controllersModule.controller('LoginController', LoginController);