/**
 * Clase encargada de manejar el listado de tareas.
 * @class
 */
app.controller('TareaCtrl', ['$scope', 'TareaService', 'Shared',

    function ($scope, service, Shared) {
        /**
         * Array que contiene los datos de la lista
         * @type Array
         * @field
         */
        $scope.data = Shared;

        /**
         * Se encarga de obtener los datos de la lista.
         * @function
         * @private
         */
        function getData(params) {
            service.listar(params)
                .then(function (response) {
                    $scope.data.list = response.data;
                })
                .catch(function (data, code) {
                    alert("Error al obtener las tareas");
                });
        }

        $scope.cargarLista = function () {
            getData();
        };

        /**
         * Constructor / Entrypoint
         * @constructor
         */
        (function initialize() {
            //se realiza el get solo si no hay datos
            if ($scope.data.list.length == 0) {
                getData();
            }
        })();
    }
]);
