/**
 * 
 */
var app = angular.module('todoApp', [
    'ngRoute', 'ngDialog' //modulo utilizan para el ruteo
]);

/**
 * Enrutador de la aplicación
 */
// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

        .when('/home', {
            templateUrl: 'partial/home-partial.html',
            controller: 'TableroCtrl'
        })
        .when('/tareas', {
            templateUrl: 'partial/tarea-partial.html',
            controller: 'TareaCtrl'
        })
        .when('/tareas/crear', {
            templateUrl: 'partial/tarea-crear-partial.html',
            controller: 'TareaCrearCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

app.config(["ngDialogProvider", function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
        className: "ngdialog-theme-default",
        plain: false,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true,
        appendTo: false,
        preCloseCallback: function () {
            console.log("default pre-close callback");
        }
    });
}]); 
