'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function documentValidate() {
  function cpf(cpfValue) {
    var Soma = 0,
        Resto;

    if (cpfValue === "00000000000") {
      return false;
    }

    for (var i=1; i<=9; i++) {
      Soma = Soma + parseInt(cpfValue.substring(i-1, i)) * (11 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) {
      Resto = 0;
    }

    if (Resto !== parseInt(cpfValue.substring(9, 10))) {
      return false;
    }

    Soma = 0;

    for (i = 1; i <= 10; i++) {
      Soma = Soma + parseInt(cpfValue.substring(i-1, i)) * (12 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11)) {
      Resto = 0;
    }

    if (Resto !== parseInt(cpfValue.substring(10, 11))) {
      return false;
    }

    return true;
  }

  return {
    cpf: cpf
  };
}

factoriesModule.factory('documentValidate', documentValidate);