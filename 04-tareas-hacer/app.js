const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, inquirerPausa } = require('./helpers/inquirer');

require('colors');

const main = async () => {
    console.log('Hola mundo');
    let option = '';
    do {
        option = await inquirerMenu();
        console.log({ option });
        
        await inquirerPausa();
        
    } while (option !== 0);
}
main();