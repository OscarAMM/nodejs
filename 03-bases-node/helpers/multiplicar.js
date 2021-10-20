const fs = require('fs');

const crearArchivo = async (base = 5) => {
    try {
        let salida = ' ';
        for (let i = 1; i < 11; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`

    } catch (error) {
        throw error;
    }
}
module.exports = {
    crearArchivo
}