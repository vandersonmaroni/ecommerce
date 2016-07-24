'use strict';

var directivesModule = require('./_index');

function controller ($scope, systemUri, $location, AuthService) {
  $scope.goToCourseDetailing = function (course) {
    $location.path(systemUri.courseDetailing(course.core.path, course.path));
  };

  $scope.logged = function() {
    return AuthService.token();
  };
}

/**
 * @ngInject
 */
function courseItem() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/courses/course-item',
    scope: {
      course: "="
    },
    controller: controller
  };
}

directivesModule.directive('courseItem', courseItem);