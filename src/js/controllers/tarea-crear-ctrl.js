/**
 * Clase encargada de manejar el listado de tareas.
 * @class
 */
app.controller('TareaCrearCtrl', ['$scope', 'TareaService', 'Shared', '$location',

    function ($scope, service, Shared, $location) {

        $scope.tarea = {
            finalizado: false
        };

        $scope.guardar = function () {
            Shared.list.push($scope.tarea);
            alert("guardado!!");
            $location.path("/tareas");
            /*
            service.crear($scope.tarea)
                .then(function (response) {
                    alert("guardado!!");
                })
                .catch(function (data, code) {
                    alert("Error al obtener las tareas");
                });
                */
            //guardar;
        };
    }
]);
