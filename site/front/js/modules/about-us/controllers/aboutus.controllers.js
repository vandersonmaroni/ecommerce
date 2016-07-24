'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function AboutUsController($scope, AboutUsService) {
  function findAboutUsCb(promisse) {
    promisse.success(function (aboutUs) {
      $scope.aboutUs = aboutUs;
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar quem somos');
      console.log(err);
    });
  }
  AboutUsService.findAboutUs(findAboutUsCb);
}

controllersModule.controller('AboutUsController', AboutUsController);