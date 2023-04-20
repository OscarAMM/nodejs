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

    /**     
     * @function cargarTareasDeArray
     * @function crearTarea
     * @function listadoCompleto
     */

    cargarTareasDeArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });

    }
    crearTarea(desc = '') {

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        let contador = 0;

        this.listadoArr.forEach(tarea => {
            contador++;

            //destructuramos el objeto para obtener sus propiedades
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${contador}. `.green + `${desc}` + '::' + estado);
        });
    }
    listadoTareasCompletadas(completada = true) {
        let contador = 0;
        this.listadoArr.forEach(tarea => {
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            
            switch (completada) {
                case true:
                    contador ++;
                    (completadoEn) ? console.log(`${contador.toString().green}. ${desc}::${estado} || ${completadoEn}`): null;
                    break;
        
                case false:
                    contador ++;
                    (!completadoEn) ? console.log(`${contador.toString().green}. ${desc}::${estado}`): null;
                    break;
            }
            
        });
    }
}

module.exports = Tareas;