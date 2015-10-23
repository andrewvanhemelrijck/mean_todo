angular.module('index').controller('IndexController', ['$scope', 'Authentication', 'Todos',
  function($scope, Authentication, Todos) {
    $scope.authentication = Authentication;

    $scope.find = function() {
      if (Authentication.user) {
        $scope.todos = Todos.query();
      }
    };

    $scope.update = function(todo) {
      todo.$update(function() {
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);