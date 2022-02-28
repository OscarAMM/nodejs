const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    /**
     * Get que permite la recuperación de tareas almacenadas
     * El objeto se convierte en un arrelgo, posteriormente se usa foreach para obtener los elementos de cada tarea
     * Se agrega a un nuevo arreglo que posteriormente se retorna y que va a ser impresa en App.js
     */
    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }
    
    constructor() {
        this._listado = {};
    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;