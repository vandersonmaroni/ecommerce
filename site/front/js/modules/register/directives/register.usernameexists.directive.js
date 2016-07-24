'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function usernameexists(RegisterService, $q) {
  return {
    restrict: 'A',
    require: "ngModel",
    link: function (scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.usernameexists = function (modelValue) {
        var defer = $q.defer();
        RegisterService.findByUsername(modelValue, function (promisse) {
          promisse.success(function (user) {
            if (user.username) {
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
      }
    }
  };
}

directivesModule.directive('usernameexists', usernameexists);

