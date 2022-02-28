const Tarea = require("./tarea");

class Tareas {

    //Este es el objeto de la lista de las tareas [Listado]
    _listado = {};

    /**
     * Get que permite la recuperación de tareas almacenadas
     * El objeto se convierte en un arrelgo, posteriormente se usa foreach para obtener los elementos de cada tarea
     * Se agrega a un nuevo arreglo que posteriormente se retorna y que va a ser impresa en App.js
     */
    get listadoArr() {
        const listado = [];
    
        /**
         * Object.keys devuelve en arreglo un objeto
         * Al ser tipo arreglo, se pueden utilizar las funciones de arreglo en JS[push,pop, etc];
         * key, es la variable que se va a usar dentro del foreach
         */
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasDeArray(tareas = []) {
        
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });

    }
    crearTarea(desc = '') {

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;