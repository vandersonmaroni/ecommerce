'use strict';

/**
 * @ngInject
 */
function routerConfig($routeProvider, $locationProvider, SystemUriConfig) {
  $routeProvider.
    when(SystemUriConfig.home, {
      templateUrl: 'expose/home/home',
      controller: 'HomeController'
    }).
    when(SystemUriConfig.aboutUs, {
      templateUrl: 'expose/about-us/about-us',
      controller: 'AboutUsController'
    }).
    when(SystemUriConfig.cores, {
      templateUrl: 'expose/cores/cores',
      controller: 'CoresController'
    }).
    when(SystemUriConfig.coursesCategory, {
      templateUrl: 'expose/courses/courses-category',
      controller: 'CoursesCategoryController'
    }).
    when(SystemUriConfig.courseDetailing, {
      templateUrl: 'expose/courses/course-detailing',
      controller: 'CourseDetailingController'
    }).
    when(SystemUriConfig.courses, {
      templateUrl: 'expose/courses/courses',
      controller: 'CoursesController'
    }).
    when(SystemUriConfig.sigin, {
      templateUrl: 'expose/sigin/sigin',
      controller: 'LoginController'
    }).
    when(SystemUriConfig.forgetPassword, {
      templateUrl: 'expose/sigin/forget-password',
      controller: 'ForgetPasswordController'
    }).
    when(SystemUriConfig.resetPassword, {
      templateUrl: 'expose/sigin/reset-password',
      controller: 'ResetPasswordController'
    }).
    when(SystemUriConfig.partners, {
      templateUrl: 'expose/partners/partners',
      controller: 'PartnersController'
    }).
    when(SystemUriConfig.register, {
      templateUrl: 'expose/register/register',
      controller: 'RegisterController'
    }).
    when(SystemUriConfig.myCourses, {
      templateUrl: 'expose/student-area/my-courses',
      controller: 'MyCoursesController'
    }).
    when(SystemUriConfig.myAccount, {
      templateUrl: 'expose/student-area/my-account',
      controller: 'MyAccountController'
    }).
    when(SystemUriConfig.checkout, {
      templateUrl: 'expose/student-area/checkout',
      controller: 'CheckoutController'
    }).
    when(SystemUriConfig.payment, {
      templateUrl: 'expose/student-area/payment',
      controller: 'PaymentController'
    }).
    when(SystemUriConfig.teachers, {
      templateUrl: 'expose/teachers/teachers',
      controller: 'TeachersController'
    }).
    when(SystemUriConfig.contact, {
      templateUrl: 'expose/contact/contact',
      controller: 'ContactController'
    }).
    when(SystemUriConfig.notFound, {
      templateUrl: 'expose/main/404',
      controller: 'NotFoundController'
    }).
    otherwise({
      redirectTo: SystemUriConfig.notFound
    });
  $locationProvider.html5Mode(true);
}

module.exports = routerConfig;