const { mostrarMenu, pausa } = require('./helpers/mensajes');

require('colors');

const main = async () => {
    console.log('Hola mundo');
    mostrarMenu();
    pausa();
}
main();