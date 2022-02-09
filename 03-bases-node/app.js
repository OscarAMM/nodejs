//print multiplicity of 5
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
console.log(argv);
const base = 9;


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => {
        console.log(nombreArchivo, 'creado');
    })
    .catch(err => {
        console.log(err);
    });