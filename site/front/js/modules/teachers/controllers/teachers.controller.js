'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function TeachersController($scope, TeachersService) {
  function findTeachersCb(promisse) {
    promisse.success(function (teachers) {
      $scope.teachers = teachers;
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar quem somos');
      console.log(err);
    });
  }
  TeachersService.findTeachers(findTeachersCb);
}

controllersModule.controller('TeachersController', TeachersController);