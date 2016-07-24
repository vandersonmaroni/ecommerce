'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HeaderController($scope, $routeParams) {
  $scope.showSearch = false;
  $scope.routeParams = $routeParams;

  $scope.showSearchModal = function () {
    $scope.showSearch = true;
  };
}

controllersModule.controller('HeaderController', HeaderController);