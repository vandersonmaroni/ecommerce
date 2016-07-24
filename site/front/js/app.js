'use strict';

var angular = require('angular');

// modules
require('./modules/main/_index');
require('./modules/home/_index');
require('./modules/about-us/_index');
require('./modules/cores/_index');
require('./modules/courses/_index');
require('./modules/email/_index');
require('./modules/login/_index');
require('./modules/partners/_index');
require('./modules/register/_index');
require('./modules/student-area/_index');
require('./modules/teachers/_index');
require('./modules/contact/_index');
require('./modules/search/_index');
require('ng-facebook');
require('angular-google-plus/dist/angular-google-plus.min.js');
require('angular-route');
require('angular-animate');
require('angular-sanitize');
require('angular-scroll');
require('angular-messages');
require('mask/dist/ngMask.min');
require('angular-i18n/angular-locale_pt-br');

var requires = [
  'coletivo.Main',
  'coletivo.Home',
  'coletivo.AboutUs',
  'coletivo.Cores',
  'coletivo.Courses',
  'coletivo.Email',
  'coletivo.Login',
  'coletivo.Partners',
  'coletivo.Register',
  'coletivo.StudentArea',
  'coletivo.Teachers',
  'coletivo.Contact',
  'coletivo.Search',
  'ngFacebook',
  'googleplus',
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'ngMask',
  'ngMessages',
  'duScroll'
];

angular.module('coletivo', requires);
angular.module('coletivo').config(require('./system.config'));
angular.module('coletivo').config(require('./system.token.interceptor.config'));
angular.module('coletivo').run(require('./system.run'));
angular.module('coletivo').run(require('./system.facebook.run'));
angular.module('coletivo').run(require('./system.route.interceptor.run'));
angular.module('coletivo').constant('SystemUriConfig', require('./system.constants'));
angular.module('coletivo').config(require('./system.google.config'));
angular.module('coletivo').config(require('./system.facebook.config'));
