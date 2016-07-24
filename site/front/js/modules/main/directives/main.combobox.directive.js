'use strict';

var directivesModule = require('./_index'),
    OPTION_DEFAULT = 'Selecione';

/**
 * @ngInject
 */
function controller ($scope) {
  $scope.model = OPTION_DEFAULT;
  $scope.showOptions = false;

  function select (option) {
    if ($scope.model !== OPTION_DEFAULT) {
      $scope.options.push($scope.model);
    }
    $scope.options.splice($scope.options.indexOf(option), 1);
    $scope.model = option;
    $scope.inputValidate = (option === OPTION_DEFAULT) ? undefined : option;
    $scope.showMessage = false;
  }

  function toggle() {
    $scope.showOptions = !$scope.showOptions;
  }

  $scope.filled = function () {
    return ($scope.model !== OPTION_DEFAULT);
  };

  $scope.select = function (option) {
    toggle();
    select(option);
  };

  $scope.toggle = function () {
    toggle();
  };

  $scope.search = function ($event) {
    var keyCode = $event.keyCode,
        options = $scope.options;

    switch (keyCode) {
      case 38:
        select(options[options.length - 1]);
        break;

      case 40:
        select(options[0]);
        break;

      default:
        if (keyCode >= 65 && keyCode <= 90) {
          var optionFilter = options.filter(function (option) {
            var regex = new RegExp('^' + $scope.inputFilter.toUpperCase());
            return regex.test(option.toUpperCase());
          });

          if (optionFilter[0]) {
            select(optionFilter[0]);
          }
        }
    }
  };
}

/**
 * @ngInject
 */
function comboBox() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/main/combo-box',
    scope: {
      model: '=',
      options: '='
    },
    controller: controller,
    link: function (scope, element, attrs) {
      scope.name = attrs.name;

      function showRequiredMessage() {
        if (scope.model === OPTION_DEFAULT) {
          scope.showMessage = true;
        }
      }

      scope.focus = function ()  {
        element.addClass("_combofocus");
      };

      scope.blur = function ()  {
        element.removeClass("_combofocus");
        scope.showOptions = false;
        delete scope.inputFilter;
        showRequiredMessage();
      };

      scope.$watch('model', function (newValue) {
        // Atribui o valor do model já preenchido
        if (scope.options && (scope.options.indexOf(newValue) > -1)) {
          scope.options.splice(scope.options.indexOf(newValue), 1);
          scope.inputValidate = newValue;
        }
        scope.model = newValue || OPTION_DEFAULT;
      }, true);
    }
  };
}

directivesModule.directive('comboBox', comboBox);