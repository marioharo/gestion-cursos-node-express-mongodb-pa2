const Enrollment = require('../models/enrollment.model');

// CREAR INSCRIPCIÓN
const createEnrollment = async (req, res) => {

    try {

        const enrollment = new Enrollment({
            usuario: req.user.id,      // ID del usuario del token
            curso: req.body.cursoId    // ID del curso del body
        });

        await enrollment.save();

        res.status(201).json({
            mensaje: 'Inscripción realizada correctamente',
            enrollment
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al registrar inscripción',
            error: error.message
        });

    }

};

// LISTAR INSCRIPCIONES
const getEnrollments = async (req, res) => {

    try {

        const enrollments = await Enrollment.find()
            .populate('usuario', 'nombre email')
            .populate('curso', 'nombre categoria');

        res.json(enrollments);

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error al obtener inscripciones'
        });

    }

};

module.exports = {
    createEnrollment,
    getEnrollments
};