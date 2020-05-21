const argv = require('./config/yargs')
const { crear, listarTareas, actualizar, eliminar } = require('./por-hacer/por-hacer');


let comando = argv._[0]


switch (comando) {
    case 'crear':
        return crear(argv.d)
    case 'listar':
        return listarTareas()
    case 'actualizar':
        return actualizar(argv.d, argv.c)
    case 'borrar':
        return eliminar(argv.d)
    default:
        return console.log('El comando no existe')
}