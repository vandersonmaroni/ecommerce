'use strict';

/**
 * @ngInject
 */
function googleConfig(GooglePlusProvider) {
   GooglePlusProvider.init({
     clientId: '794332584479-k886g9i4g8v28mondnd7nf3bk66mobbm.apps.googleusercontent.com',
     apiKey: 'FLdgGoAS72wj4NNt58Uhh1hX'
   });
   GooglePlusProvider.setScopes('profile email');
}

// development
// GooglePlusProvider.init({
//   clientId: '794332584479-4jdfbcf5fo33rehqqhgielpgantdvoel.apps.googleusercontent.com',
//   apiKey: 'ujSpGfSr4_hzFNSvG94AQ9M-'
// });

// production
// GooglePlusProvider.init({
//   clientId: '794332584479-k886g9i4g8v28mondnd7nf3bk66mobbm.apps.googleusercontent.com',
//   apiKey: 'FLdgGoAS72wj4NNt58Uhh1hX'
// });

module.exports = googleConfig;