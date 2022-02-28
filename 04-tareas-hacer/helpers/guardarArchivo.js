const fs = require('fs');
const archivo = './db/data.json';

const guardarInformacion = (data) => {

    try {
        //Obtiene la información [data] en arreglo (objeto) y lo convierte a string para guardar en archivo.json
        fs.writeFileSync(archivo, JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }

}
const leerDB = () => {
    try {

        //Verifica que el archivo existe en el path
        if (!fs.existsSync(archivo)) {
            return `No se ha encontrado el archivo con éxito. Verifique nuevamente.`;
        }
        //Si existe, lee el archivo y devuelve los datos en estructura de objeto [parse => regresa el objeto a tipo JSON]
        const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
        const data = JSON.parse(info);

        //regresa la informacion
        return data;

    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    guardarInformacion, leerDB
}