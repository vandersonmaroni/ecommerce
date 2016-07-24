'use strict';

var directivesModule = require('./_index');

function controller($scope, SearchService, $timeout, $location, systemUri, $window) {
  $scope.closeModal = function () {
    $scope.showModal = false;
  };

  function searchCb (promisse) {
    promisse.success(function (results) {
      $scope.results     = results;
      $scope.resultCount = results.length;
    });
    promisse.error(function (err) {
      console.log('Erro ao fazer o search');
      console.log(err);
    });
  }

  $scope.search = function () {
    var searchValue = $scope.searchValue;
    if (searchValue && searchValue.length > 0) {
      searchValue = searchValue.toLowerCase().replace(',', '').replace('.', '');
      SearchService.search(searchValue, searchCb);
    } else {
      $scope.messageValidation = 'Escreva algo no campo de pesquisa';
      $timeout(function () {
        $scope.messageValidation = undefined;
      }, 3000)
    }
  };

  $scope.resultClick = function (result) {
    if (result.searchType === 'course') {
      $location.path(systemUri.courseDetailing(result.core.path, result.path));
    } else {
      $window.location.href = result.link;
    }
    $scope.searchValue = undefined;
    $scope.showModal = false;
    $scope.messageValidation = undefined;
    $scope.results = undefined;
  };

  $scope.$watch('showModal', function (newValue) {
    if (newValue) {
      angular.element(document.getElementsByTagName('body')).addClass('_hidescroll');
    } else {
      angular.element(document.getElementsByTagName('body')).removeClass('_hidescroll');
    }
  });
}

/**
 * @ngInject
 */
function search() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/main/search-modal',
    scope: {
      showModal: "=",
      isDesktop: "="
    },
    controller: controller
  };
}

directivesModule.directive('search', search);