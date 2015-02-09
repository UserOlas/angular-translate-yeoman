'use strict';

/**
 * @ngdoc function
 * @name translateApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Common application controller
 */
angular.module('translateApp')
  .controller('AppCtrl', function ($scope, $rootScope, $translate) {
    /**
     * $scope.locale setting
     */
    $scope.locale = $translate.use();
    $rootScope.$on('$translateChangeSuccess', function (event, data) {
      $scope.locale = data.language;
    });

    /**
     * Provides info about current route path
     */
    $rootScope.$on('$routeChangeSuccess', function (event, current) {
      $scope.currentPath = current.$$route.originalPath;
    });
  });
