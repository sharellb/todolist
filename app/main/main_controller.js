(function(){
  'use strict';


  angular.module('devcamp-angular-main',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        })
        .when('/list', {
          templateUrl: 'main/list.html',
          controller: 'ListCtrl'
        })
        .when('/login', {
          templateUrl: 'main/login.html',
          controller: 'LoginCtrl'
        });
    })
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    })

    .controller('ListCtrl', function ($scope) {
      $scope.things = [];
      $scope.add = function(value) {
        $scope.things.push({
          name: value,
        });
        $scope.thingToAdd = '';
      };
      $scope.remove = function() {
        $scope.things.splice(this.$index, 1);
      };
    })

    .controller('LoginCtrl', function ($scope) {
      $scope.greeting = 'Hello world!';
    });

})();