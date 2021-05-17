const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
    },
    apellido: {
        type: String,
        required: [true, 'Apellido requerido'],
    },
    email: {
        type: String,
        required: [true, 'Email requerido'],
    },
    password: {
        type: String,
        required: [true, 'Password requerido'],
    },
    dni: {
        type: Number,
        required: [true, 'Password requerido'],
    },
    domicilio: {
        type: String,
        required: [true, 'Domicilio requerido'],
    },
    fechaAlta: {
        type: Date,
    },
})

module.exports = model('User',UserSchema)