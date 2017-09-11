/**
 * Clase encargada de manejar el listado de tareas.
 * @class
 */
app.controller('TableroCtrl', ['$scope', 'TableroService', 'Tablero', 'ngDialog',
    function ($scope, service, Tablero, ngDialog) {
        /**
         * Array que contiene los datos de la lista
         * @type Array
         * @field
         */
        $scope.data = {
            tableros: []
        };


        /**
         * Se encarga de obtener los datos de la lista.
         * @function
         * @private
         */
        function getData(params) {
            service.listar(params)
                .then(function (response) {
                    $scope.data.tableros = response.data;
                    $scope.editarNombre = false;
                })
                .catch(function (data, code) {
                    alert("Error al obtener los tableros");
                });
        }

        $scope.cargarLista = function () {
            getData();
        };

        $scope.agregarTablero = function () {

            ngDialog.open({
                template: 'partial/dialogoTablero.html',
                className: 'ngdialog-theme-default',
                scope: $scope,
                showClose: true,
                closeByDocument: true,
                closeByEscape: true
            });


        };

        $scope.cerrarModal = function () {
            ngDialog.close();
        }

        $scope.guardarTablero = function () {

            params = {
                nombre: $scope.nombreTablero,
                descripcion: $scope.descripcionTablero
            };
            
            service.crear(params).then(() => {
                getData();  
                ngDialog.close();
            });
        }

        $scope.cambiarModoTitulo = function () {
            $scope.modoEdicionTitulo = !$scope.modoEdicionTitulo;
        };

        $scope.guardarTitulo = function ($event, tablero) {
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13) {
                if ($scope.editado) {
                    service.editarNombre(tablero);
                }
                $scope.cambiarModoTitulo();
            }
        };

        $scope.cambiarModoDescripcion = function () {
            $scope.modoEdicionDescripcion = !$scope.modoEdicionDescripcion;
        };

        $scope.guardarDescripcion = function ($event, tablero) {
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13) {
                if ($scope.editado) {
                    service.editarDescripcion(tablero);
                }
                $scope.cambiarModoDescripcion();
            }
        };

        /**
         * Constructor / Entrypoint
         * @constructor
         */
        (function initialize() {
            //se realiza el get solo si no hay datos
            if ($scope.data.tableros.length == 0) {
                getData();
            }
        })();
    }
]);
