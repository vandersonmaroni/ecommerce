'use strict';

/**
 * @ngInject
 */
function fbConfig($facebookProvider) {
  $facebookProvider.setAppId('591485647675123');
  $facebookProvider.setVersion("v2.5");
  $facebookProvider.setCustomInit({
    channelUrl : '//localhost:3002',
    xfbml      : true
  });
}

// development
// $facebookProvider.setAppId('591487974341557');

// production
// $facebookProvider.setAppId('591485647675123');

module.exports = fbConfig;