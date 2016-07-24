'use strict';

var directivesModule = require('./_index');

function controller($scope) {
  $scope.user.areasInterestModel = {};
  $scope.passwordHide = true;
  $scope.passwordToggle = function () {
    $scope.passwordHide = !$scope.passwordHide;
  };
}

/**
 * @ngInject
 */
function registerFormShort() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/register/register-form-short',
    scope: {
      user: "=",
      save: "&"
    },
    controller: controller
  };
}

directivesModule.directive('registerFormShort', registerFormShort);