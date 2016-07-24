'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function controller($scope, $location) {
  $scope.goToCourses = function (core) {
    $location.path($scope.systemUri.coursesCategory(core.path));
  };
}

/**
 * @ngInject
 */
function core() {

  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/cores/core-item',
    scope: {
      core: "=",
      systemUri: "="
    },
    controller: controller
  };
}

directivesModule.directive('core', core);