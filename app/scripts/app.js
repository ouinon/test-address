'use strict';

/**
 * @ngdoc overview
 * @name affixalllApp
 * @description
 * # affixalllApp
 *
 * Main module of the application.
 */
angular
  .module('addressApp', [
    'ngAnimate',
    'ngRoute'
    // 'ngSanitize'
  ])
  .config(['$routeProvider',function ($routeProvider) {

    $routeProvider
      .when('/address', {
        templateUrl: 'views/address.html',
        controller: 'AddressCtrl'
      })
      .when('/address/_create', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/address/edit/:name', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/address/:name', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/address'
      });

  }]);