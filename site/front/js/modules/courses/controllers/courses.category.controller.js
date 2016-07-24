'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CoursesCategoryController($scope, categoryAreasService, $location) {
  function findCategoryAreasCb (promisse) {
    promisse.success(function (categoryAreas) {
      $scope.categoryAreas = categoryAreas;
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar category areas');
      console.log(err);
    });
  }

  categoryAreasService.findCategoryAreas(findCategoryAreasCb);
}

controllersModule.controller('CoursesCategoryController', CoursesCategoryController);