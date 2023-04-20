const { guardarInformacion, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, inquirerPausa, leerInput, listadoBorrarTareas, confirmationMethod } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');

const main = async () => {    
    try {
        let option = '';

        const tareas = new Tareas();
        //obtiene los valores de la BD [o archivo en este caso]
        const tareasDB = leerDB();

        //Verifica la existencia de dichos valores [que no sea null]
        if(tareasDB){
            //se establecen las tareas
            const tareasLista = tareas.cargarTareasDeArray(tareasDB);
            console.log(tareasLista);
        }

        do {
            option = await inquirerMenu();
            switch (option) {
                case 1:
                    const descripcion = await leerInput('Descripcion: ');

                    tareas.crearTarea(descripcion);
                    break;

                case 2:
                    tareas.listadoCompleto();
                    break;
                case 3:
                    tareas.listadoTareasCompletadas(true);
                    break;
                case 4:
                    tareas.listadoTareasCompletadas(false);
                    break;
                case 6:
                    const id = await listadoBorrarTareas(tareas.listadoArr);
                    if(id != 0){
                        const confirmation = await confirmationMethod(`¿Está seguro de eliminar el objeto ${id}?`);
                        if(confirmation){
                            tareas.borrarTarea(id);
                            console.log('La tarea ha sido eliminada del sistema.');
                        }
                    }else{
                        console.log('La operación ha sido cancelada.');
                    }
                    
                    
                    break;
            }

            guardarInformacion(tareas.listadoArr);

            await inquirerPausa();

        } while (option !== 0);
    } catch (error) {
        console.error(error);
    }

}
main();