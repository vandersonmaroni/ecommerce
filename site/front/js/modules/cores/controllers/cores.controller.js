'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function CoresController($scope, CoresService) {
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

controllersModule.controller('CoresController', CoresController);