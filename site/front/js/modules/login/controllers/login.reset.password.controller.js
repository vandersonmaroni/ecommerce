'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ResetPasswordController($scope, showMessageBuilder, ForgetPasswordService, $timeout, $location, $routeParams) {
  $scope.passwordHide = true;
  $scope.user = {};

  $scope.passwordToggle = function () {
    $scope.passwordHide = !$scope.passwordHide;
  };

  function resetPasswordCb (promisse) {
    promisse.then(function (response) {
      showMessageBuilder.info($scope, 'Senha redefinida com sucesso :)');
      $timeout(function () {
        $location.path($scope.systemUri.sigin());
      }, 5000);
      $scope.user = {};
    });
    promisse.catch(function (response) {
      var message = response.data;
      switch (response.status) {
        case 403:
          showMessageBuilder.error($scope, response.data);
          break;

        case 500:
          console.log('Erro ao salvar a senha');
          console.log(message);
          showMessageBuilder.error($scope, 'Houve um problema para salvar sua senha :(');
          break;
      }
    });
  }

  $scope.resetPassword = function (user) {
    ForgetPasswordService.saveNewPassword(user.password, $routeParams.token, resetPasswordCb);
  };
}

controllersModule.controller('ResetPasswordController', ResetPasswordController);