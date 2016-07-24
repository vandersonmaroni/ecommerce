'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function coreStyle($location, CoresService, $document) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      var path        = $location.path(),
          HEIGHT_TOP  = 70;

      function findCoresCb(promisse) {
        promisse.success(function (cores) {
          $document.on('scroll', function() {
            if ($document.scrollTop() > HEIGHT_TOP) {

              var len = cores.length;
              while (len--) {
                var core = cores[len];
                if (path.indexOf(core.path) > -1) {
                  element.css({
                    'background': core.buttonColor,
                    'opacity': 0.9
                  });
                } else {
                  element.css({
                    'background': 'none',
                    'opacity': 0.9
                  });
                }
              }
            } else {
              element.css({
                'background': 'none',
                'opacity': 0.9
              });
            }
          });

        });
        promisse.error(function (err) {
          console.log('Erro ao buscar os núcleos');
          console.log(err);
        });

      }

      function changeColor () {
        CoresService.findCores(findCoresCb);
      }

      changeColor();
      scope.$on('$locationChangeSuccess', changeColor);
    }
  };
}

directivesModule.directive('coreStyle', coreStyle);