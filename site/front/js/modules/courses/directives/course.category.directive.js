'use strict';

var directivesModule = require('./_index');

function controller ($scope, systemUri, $location, $routeParams, CategoryCoursesService, showMessageBuilder) {
  function findCategoryAreasCb (promisse) {
    promisse.success(function (courses) {
      (courses.length === 0) ? $scope.category.coursesEmpty = true : $scope.category.coursesEmpty = false;
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar os cursos de cada categoria');
      console.log(err);
    });
  }
  CategoryCoursesService.findCategoryAreas(findCategoryAreasCb, $routeParams.core, $scope.category.path);


  $scope.goToCourses = function (categoryArea) {
    if (!$scope.category.coursesEmpty) {
      $location.path(systemUri.courses($routeParams.core, categoryArea.path));
    }
  };
}

/**
 * @ngInject
 */
function categoryItem() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/courses/category-area',
    scope: {
      category: "=",
      mobile: "="
    },
    controller: controller
  };
}

directivesModule.directive('categoryItem', categoryItem);