const { crearArchivo, mensaje, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite).then(tabla => console.log(`${tabla}`)).catch(err => console.log(err));
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${ archivo}`)).catch(err => console.log(err));
        break;

    default:

        console.log("Comando no reconocido");
        break;


}




//mensaje(10).then(resul => console.log(resul))    .catch(error => console.log(error));