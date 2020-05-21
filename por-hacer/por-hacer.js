const fs = require('fs')
const colors = require('colors')

let listadoPorHacer

const guardarTarea = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile(`./db/data.json`, data, (e) => e ? console.log(e) : '')
}

const cargarListadoPorHacer = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }
}

exports.crear = (descripcion) => {

    cargarListadoPorHacer()

    let toDo = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(toDo)

    guardarTarea()

    return toDo
}

exports.listarTareas = () => {
    cargarListadoPorHacer()
    listadoPorHacer.forEach(({ descripcion, completado }) => {
        console.log('-------Tarea--------'.green)
        console.log(descripcion)
        console.log(completado)
        console.log('--------------------'.green)
    })
}

exports.actualizar = (descripcion, completado = true) => {
    cargarListadoPorHacer()

    if (completado != 'false' && completado != 'true') return console.log('El estado solo puede ser true o false')

    let existe

    listadoPorHacer.filter(tarea => {
        if (tarea.descripcion === descripcion) return existe = true
        return existe = false
    })

    if (!existe) return console.log('Esa tarea no existe')

    let listaActualizada = listadoPorHacer.map(tarea => {
        if (tarea.descripcion === descripcion) return tarea = { descripcion, completado: completado === 'true' ? true : false }
        return tarea
    })

    listadoPorHacer = listaActualizada

    guardarTarea()
}

exports.eliminar = (descripcion) => {
    cargarListadoPorHacer()

    if (listadoPorHacer === []) return console.log('No hay elementos para borrar')

    let listaActualizada = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (listadoPorHacer.length === listaActualizada.length) return console.log('el elemento no existe')

    listadoPorHacer = listaActualizada

    guardarTarea()
}