'use strict';

var directivesModule = require('./_index');

function controller($scope, AuthService, AddressService) {
  $scope.user.areasInterestModel = {};
  $scope.passwordHide = true;
  $scope.passwordToggle = function () {
    $scope.passwordHide = !$scope.passwordHide;
  };

  $scope.showScholarityField = function () {
    return ($scope.user.study === 'Sim');
  };

  $scope.toggleInterestArea = function (area) {
    var areasInterest = $scope.user.areasInterest,
        index = areasInterest.indexOf(area);

    if (index === -1) {
      areasInterest.push(area);
    } else {
      areasInterest.splice(index, 1);
    }
  };

  $scope.autoCompleteAddress = function(zipCode) {
    function findAddressCb(address) {
      $scope.user.addrees = address.address;
      $scope.user.uf = address.state;
      $scope.user.city = address.city;
      $scope.user.district = address.district;
    }

    AddressService.findAddressByZipCode(findAddressCb, zipCode);
  };

  $scope.logged = AuthService.userAuthenticated();
}

/**
 * @ngInject
 */
function registerForm() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/register/register-form',
    scope: {
      user: "=",
      save: "&",
      enableCheckout: "=",
      clicked: "="
    },
    controller: controller
  };
}

directivesModule.directive('registerForm', registerForm);