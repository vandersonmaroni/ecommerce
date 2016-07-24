'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function footer($window, $timeout) {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'partials/main/footer-base',
    link: function (scope, element) {
      function fixedFooter() {
        element.removeClass('footer-fixed');
        $timeout(function () {
          var $el          = element[0],
              windowHeight = $window.innerHeight,
              footerTop    = $el.offsetTop;

          if (windowHeight > footerTop) {
            element.addClass('footer-fixed');
          }
        }, 2500);
      }
      // fixedFooter();
      // scope.$on('$locationChangeSuccess', fixedFooter);
    }
  };
}

directivesModule.directive('footer', footer);