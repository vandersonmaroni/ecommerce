'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function menuScroll($document, $location, systemUri) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      function changeMenuClass () {
        var currentPath         = $location.path(),
            HEIGHT_TOP          = 70,
            arrayPath           = $location.path().split('/'),
            lastPath            = arrayPath[arrayPath.length-1],
            pathsWithoutBanner  = [
              systemUri.register(),
              systemUri.sigin(),
              systemUri.forgetPassword(),
              systemUri.resetPassword(lastPath),
              systemUri.payment(lastPath),
              systemUri.myCourses(),
              systemUri.myAccount(),
              systemUri.notFound(),
              systemUri.checkout()
            ];

        if (pathsWithoutBanner.indexOf(currentPath) > -1) {
          element.addClass('topbarbackground');
          $document.unbind('scroll');
        } else {
          element.removeClass('topbarbackground');

          $document.on('scroll', function() {
            if ($document.scrollTop() > HEIGHT_TOP) {
              element.addClass('topbarbackground');
            } else {
              element.removeClass('topbarbackground');
            }
          });
        }
      }

      scope.$on('$locationChangeSuccess', changeMenuClass);
    }
  };
}

directivesModule.directive('menuScroll', menuScroll);