const { inquirerMenu, inquirerPausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');

const main = async () => {
    console.log('Hola mundo');
    let option = '';

    const tareas = new Tareas();

    do {
        option = await inquirerMenu();
        switch (option) {
            case 1:
                const descripcion = await leerInput('Descripcion: ');

                tareas.crearTarea(descripcion);
                break;

            case 2:
                console.log(tareas.listadoArr);
                break;
            case 3:
                break;
        }

        await inquirerPausa();

    } while (option !== 0);
}
main();