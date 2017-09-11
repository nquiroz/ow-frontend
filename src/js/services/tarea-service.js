/*
 * @Class
 * Definición del service que se encarga de la comunicación con la capa de servicios. 
 * Abarca las operaciones que pueden ser realizadas sobre el recurso Tarea.
 */
app.service('TareaService', ['$http', function ($http) {
    return {
        /**
         * Realiza un get para obtener el json correspodiente a lalista
         * de anteproyecto.
         * @function
         */
        listar: function (params) {
            return $http.get('data/tareas.json', {
                params: params
            });
        },
        crear: function (params) {
            return $http.post('data/tareas.json', params);
        }
    }
}]);
