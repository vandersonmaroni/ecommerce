'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function cpfexists(RegisterService, $q, AuthService, showMessageBuilder) {
  return {
    restrict: 'A',
    require: "ngModel",
    scope: true,
    link: function (scope, element, attrs, ngModel, $rootScope) {
      ngModel.$asyncValidators.cpfexists = function (modelValue) {
        var defer = $q.defer();
        RegisterService.findByCpf(modelValue, function (promisse) {
          promisse.success(function (user) {
            if (user.cpf && user.token !== AuthService.token()) {
              // Se existir token na sessão, então é uma alteração
              defer.reject();
            } else {
              defer.resolve();
            }
          });
          promisse.error(function (err) {
            console.log('Erro ao verificar se CPF já foi cadastrado');
            console.log(err);
            defer.resolve();
          });
        });
        return defer.promise;
      };
    }
  };
}

directivesModule.directive('cpfexists', cpfexists);