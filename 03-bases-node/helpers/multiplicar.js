const fs = require('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 10)  => {
    try {
        let salida = ' ';
        for (let i = 1; i <= `${hasta}`; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        if (listar == true) {
            console.log(salida);
        }
        return `tabla-${base}.txt`

    } catch (error) {
        throw error;
    }
}
module.exports = {
    crearArchivo
}