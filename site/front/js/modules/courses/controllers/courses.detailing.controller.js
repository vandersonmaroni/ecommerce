'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CourseDetailingController($scope, $document, $window, $location, AuthService, CourseDetailingService, $routeParams, showMessageBuilder, CheckoutService, systemUri) {
  $document.scrollTop(0, 200);

  function verifyStockOut(course) {
    var classes = course.class;
    $scope.stockOut = ((classes) && classes.inscriptionLimit - classes.inscriptionAmount <= 0);
  }

  function findCourseCb (promisse) {
    promisse.success(function (course) {
      var courseDate = new Date(course.class.beginDate),
          now        = new Date();
      if (courseDate < now) {
        course.class.beginDate = 'Sob consulta';
        course.unavailable = true;
      }
      $scope.course = course;
      verifyStockOut(course);
    });

    promisse.error(function (err) {
      console.log('Erro ao buscar o curso');
      console.log(err);
    });
  }

  $scope.checkboxTerms = {
    accept: false
  };

  $scope.logged = function() {
    return AuthService.token();
  };

  $scope.checkout = function(checkboxTerms, course) {
    if (checkboxTerms.accept) {
      var order = {};
      order.course = course;
      order.user = {

      };

      CheckoutService.storageOrder(angular.toJson(order));
      $location.path(systemUri.checkout());
    } else {
      showMessageBuilder.warn($scope, 'Para efetuar a compra aceite os termos ;)');
    }
  };

  CourseDetailingService.findCourse(findCourseCb, $routeParams.core, $routeParams.path);
}

controllersModule.controller('CourseDetailingController', CourseDetailingController);