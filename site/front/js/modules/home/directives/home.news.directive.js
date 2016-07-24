'use strict';

var directivesModule = require('./_index');

/**
 * @ngInject
 */
function newsItem() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'partials/home/news-item',
    scope: {
      new: "="
    }
  };
}

directivesModule.directive('newsItem', newsItem);