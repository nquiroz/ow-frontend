/**
 * Enrutador de la aplicación
 */
var app = angular.module('todoApp', ['ngRoute']);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partial/home-partial.html',            
        })
        .when('/tareas', {
            templateUrl: 'partial/tarea-partial.html',
            controller: 'TareaCtrl'
        })
        .when('/tareas/crear', {
            templateUrl: 'partial/crear-partial.html',
            controller: 'TareaCrearCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
});




