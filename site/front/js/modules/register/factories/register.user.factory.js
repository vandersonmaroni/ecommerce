'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function userBuilder() {

  function setArrays ($scope) {
    $scope.user.dateBirth = new Date($scope.user.dateBirth);
    $scope.user.areasInterestModel = {};
    $scope.user.areasInterest = [];
    $scope.user.arrays = {
      genre:                ['Masculino', 'Feminino'],
      uf:                   ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      study:                ['Sim', 'Não'],
      schooling:            ['Pós graduação', 'Ensino superior', 'Ensino médio', 'Ensino técnico'],
      institutionType:      ['Pública', 'Privada'],
      howmet:               ['Google', 'Anúncio em outro site', 'Indicação'],
      areasInterest:        ['Administração e Negócios', 'Desenvolvimento Profissional', 'Idiomas', 'Recursos Humanos', 'Ciências Exatas', 'Direito', 'Meio Ambiente', 'Saúde', 'Comunicação e Marketing', 'Finanças', 'Pedagogia e Educação', 'Tecnologia']
    };
  }

  function create ($scope) {
    $scope.user = {};
    setArrays($scope);
  }

  return {
    create: create,
    setArrays: setArrays
  };
}

factoriesModule.factory('userBuilder', userBuilder);