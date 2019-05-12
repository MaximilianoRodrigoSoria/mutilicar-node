const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) { return reject(`${base} no es un numero`); }


        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(
            `tablas/tabla-${base}.txt`,
            data,
            (err) => {
                if (err) { return reject(err); } else { resolve(`tabla-${base}.txt`); }
            }
        );
    })
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) { return reject(`${base} no es un numero`); }

        console.log('================================='.green);
        console.log(`=====      Tabla de ${base}      ======`.green);
        console.log('================================='.green);
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        if (data == '')
            return reject('No existe tabla de multiplicar');
        else
            return resolve(data);

    })
}

let mensaje = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero > 50) {
            return resolve(`Success: El numero ${numero} es mayor a 50`);
        } else {
            return reject(`Error: El numero ${numero} es menor a 50`);
        }

    });
}

module.exports = {
    crearArchivo,
    mensaje,
    listarTabla

}