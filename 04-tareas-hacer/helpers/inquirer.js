const inquirer = require('inquirer');
const inquirier = require('inquirer');
require('colors');

//menu de opciones para el inquirer
//el tipo lista para obtener el listado de opciones

const menuOpts = [{
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea realizar?',
    choices: [
        {
            value: 1,
            name: `${'1.'.green} Crear tareas`
        },
        {
            value: 2,
            name: `${'2.'.green} Listar las tareas`
        },
        {
            value: 3,
            name: `${'3.'.green} Listar tareas completadas`
        },
        {
            value: 4,
            name: `${'4.'.green} Listar tareas pendientes`
        }, {
            value: 5,
            name: `${'5.'.green} Completar tarea(s)`
        }, {
            value: 6,
            name: `${'6.'.green} Borrar tarea`
        }, {
            value: 0,
            name: `${'0.'.cyan} Salir`
        }
    ]
}];
const pausaOpt = [
    {
        type: 'input',
        name: 'pausa',
        message: `Presione: ${'ENTER'.green} para continuar`,
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('======================'.green);
    console.log('Seleccione una opción'.green);
    console.log('======================\n'.green);

    /**
     * menuOpts -> un arreglo de objetos que contiene el valor y el nombre que aparece
     * {opcion} es un objeto destructurado que se obtiene al ser seleccionado por el usuario en consola
     * regresa el valor para ser consultado en app.js
     */
    
    const { opcion } = await inquirier.prompt(menuOpts);
    


    return opcion;
}

const inquirerPausa = async () => {
    const {pausa} = await inquirer.prompt(pausaOpt)
    return pausa;
}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: message,
            validate( value ){
                if(value.length === 0){
                    return 'Por favor, ingrese un valor';
                }
                return true;
            } 
        }
    ]
    const {desc} = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu, inquirerPausa, leerInput
}