'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeController($scope, HomeService, $location) {
  function findFeaturedCoursesCb (promisse) {
    promisse.success(function (courses) {
      $scope.featuredCourses = courses;
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar os cursos em destaque');
      console.log(err);
    });
  }
  function findNewsCb (promisse) {
    promisse.success(function (news) {
      $scope.news = news;
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar as novidades');
      console.log(err);
    });
  }

  function findCoworkingCb (promisse) {
    promisse.success(function (coworking) {
      $scope.coworking = coworking;
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar o coworking');
      console.log(err);
    });
  }

  HomeService.findFeaturedCourses(findFeaturedCoursesCb);
  HomeService.findNews(findNewsCb);
  HomeService.findCoworking(findCoworkingCb);

  $scope.goToCoursesCategory = function () {
    $location.path($scope.systemUri.coursesCategory());
  };

  $scope.goToCores = function () {
    $location.path($scope.systemUri.cores());
  };
}

controllersModule.controller('HomeController', HomeController);