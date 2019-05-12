const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        //demand: true,
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', opts)
    .command('crear', 'Crear archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = { argv }