const description = {
    demand: true,
    alias: 'd',
    type: String
}

const listar = {
    demand: true,
    alias: 'l',
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Valida que se completo el cambio'
}

const argv = require('yargs')
    .command('crear', 'crea elementos', {
        description
    })
    .command('listar', 'los muestra', {
        listar
    })
    .command('actualizar', 'actualiza elementos', {
        description,
        completado
    })
    .command('borrar', 'elimina los elementos', {
        description
    })
    .help()
    .argv

module.exports = argv