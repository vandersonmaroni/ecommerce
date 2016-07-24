'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function personDisplay() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/main/person-display',
    scope: {
      person: "="
    }
  };
}

directivesModule.directive('personDisplay', personDisplay);