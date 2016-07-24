'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CoursesController($scope, CategoryCoursesService, $location, $routeParams) {
  $scope.coursesEmpty = false;

  function findCategoryCb (promisse) {
    promisse.success(function (category) {
      $scope.category = category;
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar a categoria');
      console.log(err);
    });
  }

  function findCategoryAreasCb (promisse) {
    promisse.success(function (courses) {
      if (courses.length > 0) {
        $scope.courses = courses;
        $scope.category = courses[0].category;
      } else {
        $scope.coursesEmpty = true;
        CategoryCoursesService.findCategoryByName($routeParams.path, findCategoryCb);
      }
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar category Courses');
      console.log(err);
    });
  }

  CategoryCoursesService.findCategoryAreas(findCategoryAreasCb, $routeParams.core, $routeParams.path);
}

controllersModule.controller('CoursesController', CoursesController);