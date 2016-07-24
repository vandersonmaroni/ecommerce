'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function cpfvalid(documentValidate) {
  return {
    restrict: 'A',
    require: "ngModel",
    link: function (scope, element, attrs, ngModel) {
      ngModel.$validators.cpfvalid = function (modelValue) {
        return documentValidate.cpf(String(modelValue));
      }
    }
  };
}

directivesModule.directive('cpfvalid', cpfvalid);