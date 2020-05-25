let demoApp = angular.module('demo', []);
demoApp.controller(
  'MainController',
  ['$scope',
   function($scope) {
      $scope.vm = {name: "foo", clearName: function() { this.name = ""; }};
    }]);
