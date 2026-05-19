const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    codigo: {
    type: Number,
    required: true
    },
    
    nombre: {
        type: String,
        required: true
    },

    categoria: {
        type: String,
        required: true
    },

    docente: {
        type: String,
        required: true
    },

    modalidad: {
        type: String
    },

    duracion: {
        type: Number
    },

    vacantes: {
        type: Number
    },

    costo: {
        type: Number
    },

    fechaInicio: {
        type: Date
    },

    activo: {
        type: Boolean,
        default: true
    },

    descripcion: {
        type: String
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);