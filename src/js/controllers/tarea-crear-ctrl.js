/**
 * Clase encargada de manejar el listado de tareas.
 * @class
 */
app.controller('TareaCrearCtrl', ['$scope', 'TareaService', 'Shared','$location',

    function ($scope, service, Shared,$location) {
       
        $scope.tarea = {
            finalizado : true  
        };
        
        /**
         * Se encarga de crear la nueva tarea
         * @function
         * @private
         */
        $scope.crear = function() {
            alert('Guardado');
            Shared.list.push($scope.tarea);
            $location.path('/tareas');
            /*service.crear(params)
                .then(function (response) {
                    $scope.data.list.push = response.data;
                })
                .catch(function (data, code) {
                    alert("Error al obtener las tareas");
                });*/
        };
    
    }
]);