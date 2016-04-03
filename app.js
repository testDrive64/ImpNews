var app = angular.module('impNews', []);

app.controller('MainCtrl', [
  '$scope',
  $scope.posts = [
    'post 1',
    'post 2',
    'post 3',
    'post 4',
    'post 5'
  ];
  
  function($scope) {
    $scope.test = 'Hello world!';
  }
]);
