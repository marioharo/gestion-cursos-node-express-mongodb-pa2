const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({

    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    curso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },

    fecha: {
        type: Date,
        default: Date.now
    },

    estado: {
        type: String,
        default: 'activo'
    }

});

module.exports = mongoose.model(
    'Enrollment',
    enrollmentSchema
);