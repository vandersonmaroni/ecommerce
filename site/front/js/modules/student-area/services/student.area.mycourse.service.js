'use strict';

var servicesModule = require('./_index');

/**
 * @ngInject
 */
function MyCoursesService(requestApiService) {
  this.findMyCourses = function (cb, userId) {
    requestApiService.get(cb, '/area-do-aluno/meus-cursos/' + userId);
  };
}

servicesModule.service('MyCoursesService', MyCoursesService);