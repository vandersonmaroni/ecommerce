'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PartnersController($scope, partnersService) {
  function findPartnersCb(promisse) {
    promisse.success(function (pagePartners) {
      $scope.pagePartners = pagePartners;
    });
    promisse.error(function (err) {
      console.log('Erro ao buscar os parceitos');
      console.log(err);
    });
  }

  partnersService.findPartners(findPartnersCb);
}

controllersModule.controller('PartnersController', PartnersController);