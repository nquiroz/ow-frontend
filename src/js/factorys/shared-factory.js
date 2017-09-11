/**
 * Variable compartida entre los controladores. se utiliza para añadir
 * elementos a la lista de tareas.
 */
app.factory('Shared', function () {
    return {
        list: []
    };
});


/**
 * Variable compartida entre los controladores. se utiliza para añadir
 * elementos a la lista de tareas.
 */
app.factory('Tablero', function () {
    return {
        tableros: []
    };
});