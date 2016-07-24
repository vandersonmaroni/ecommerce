'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function coreColor($document, $location, systemUri, CoresService) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      function findCoresCb(promisse) {
        promisse.success(function (core) {
          element.css({
            'background': core.buttonColor,
            'opacity' : 0.8
          });
        });
        promisse.error(function (err) {
          console.log('Erro ao buscar os núcleos');
          console.log(err);
        });
      }

      function changeMenuClass () {
        var currentPath         = $location.path(),
            HEIGHT_TOP          = 70,
            arrayPath           = $location.path().split('/'),
            firstPath           = arrayPath[1],
            lastPath            = arrayPath[arrayPath.length-1],
            pathsOfCourses      = [
              systemUri.courses(firstPath, lastPath),
              systemUri.coursesCategory(firstPath),
              systemUri.courseDetailing(firstPath, lastPath)
            ];

        if (pathsOfCourses.indexOf(currentPath) > -1) {
          CoresService.findCoreByPath(firstPath, findCoresCb);
        } else {
          element.removeAttr('style');
          if ($document.scrollTop() > HEIGHT_TOP) {
            element.addClass('topbarbackground');
          }
        }
      }

      scope.$on('$locationChangeSuccess', changeMenuClass);
    }
  };
}

directivesModule.directive('coreColor', coreColor);