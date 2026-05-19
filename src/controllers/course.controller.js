const Course = require('../models/course.model');


// CREAR CURSO
const createCourse = async (req, res) => {

    try {

        // variables
        const { codigo, nombre, categoria, docente } = req.body;
        
        // validador de campos vacíos
        if (!codigo || !nombre || !categoria || !docente) {
            return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
        }
        
        const course = new Course(req.body);
        await course.save();

        res.status(201).json({
            mensaje: 'Curso creado correctamente',
            course
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'No se pudo crear el curso',
            error
        });

    }

};


// LISTAR CURSOS
const getCourses = async (req, res) => {

    try {

        const courses = await Course.find();

        res.json(courses);

    } catch (error) {

        res.status(500).json({
            mensaje: 'No se pudieron obtener los cursos'
        });

    }

};


// EDITAR CURSO
const updateCourse = async (req, res) => {

    try {

        const { id } = req.params;

        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedCourse) {
            return res.status(404).json({
                mensaje: 'Curso no encontrado'
            });
        }
        res.json({
            mensaje: 'Curso actualizado',
            updatedCourse
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'No se pudo actualizar el curso'
        });

    }

};


// ELIMINAR CURSO
const deleteCourse = async (req, res) => {

    try {

        const { id } = req.params;

        const courseDeleted = await Course.findByIdAndDelete(id);

        if (!courseDeleted) {
            return res.status(404).json({
                mensaje: 'Curso no encontrado'
            });
        }

        res.json({
            mensaje: 'Curso eliminado correctamente'
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'No se pudo eliminar el curso'
        });

    }

};


module.exports = {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse
};