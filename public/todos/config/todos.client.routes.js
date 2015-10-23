angular.module('todos').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/todos/create', {
      templateUrl: 'todos/views/create-todo.client.view.html'
    }).
    when('/todos/:todoId', {
      templateUrl: 'todos/views/view-todo.client.view.html'
    }).
    when('/todos/:todoId/edit', {
      templateUrl: 'todos/views/edit-todo.client.view.html'
    });
  }
]);