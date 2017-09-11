/*
 * @Class
 * Definición del service que se encarga de la comunicación con la capa de servicios. 
 * Abarca las operaciones que pueden ser realizadas sobre el recurso Tarea.
 */
app.service('TableroService', ['$http', function ($http) {
    return {
        /**
         * Realiza un get para obtener el json correspodiente a la lista
         * de anteproyecto.
         * @function
         */
        listar: function (params) {
            return $http.get(App.REST_BASE + '/tableros', params);
        },
        crear: function (params) {
            return $http.post(App.REST_BASE + '/tableros', params);
        },
        eliminar: function (params) {
            return $http.post(App.REST_BASE + '/tableros/' + params.id);
        },
        modificar: function (params) {
            return $http.put(App.REST_BASE + '/tableros', params);
        }
    }
}]);
