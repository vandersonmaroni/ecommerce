'use strict';

/**
 * @ngInject
 */
function run($rootScope, AuthService, $location) {
  $rootScope.$on("$locationChangeStart",function () {
    var path = $location.path(),
        restrictPaths = [
          $rootScope.systemUri.myCourses(),
          $rootScope.systemUri.myAccount(),
          $rootScope.systemUri.checkout(),
          $rootScope.systemUri.payment(),
        ];

    if (restrictPaths.indexOf(path) > -1) {
      if (!AuthService.userAuthenticated()) {
        $location.path($rootScope.systemUri.home());
      }
    }
  });
}

module.exports = run;
