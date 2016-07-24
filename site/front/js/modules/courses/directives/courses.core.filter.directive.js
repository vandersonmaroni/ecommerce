'use strict';

var directivesModule = require('./_index');

function controller ($scope, CoresService, $routeParams, $location) {
  $scope.selectedCore = $routeParams.core;

  $scope.filter = function (core) {
    $location.path($scope.systemUri.courses(core.path, $routeParams.path));
  };

  function findCoresCb(promisse) {
    promisse.success(function (cores) {
      $scope.cores = cores;
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar os núcleos');
      console.log(err);
    });
  }
  CoresService.findCores(findCoresCb);
}

/**
 * @ngInject
 */
function coursesCoreFilter($routeParams) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/courses/courses-core-filter',
    scope: {
      systemUri: '='
    },
    link: function (scope, element) {
      scope.mouseenter = function (index, core) {
        var container   = element.children()[0],
            buttonCore  = angular.element(container).children()[index];
        if ($routeParams.core !== core.path) {
          angular.element(buttonCore).removeClass('core_disabled');
        }
      };

      scope.mouseleave = function (index, core) {
        var container   = element.children()[0],
            buttonCore  = angular.element(container).children()[index];

        if ($routeParams.core !== core.path) {
          angular.element(buttonCore).addClass('core_disabled');
        }
      };
    },
    controller: controller
  };
}

directivesModule.directive('coursesCoreFilter', coursesCoreFilter);