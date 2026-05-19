const User = require('../models/user.model');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// REGISTRO
const register = async (req, res) => {

    try {

        const { nombre, email, password, rol } = req.body;

        // validador de campos vacíos
        if (!nombre || !email || !password) {
            return res.status(400).json({ mensaje: 'Todos los campos son requeridos' });
        }
        // verificar email
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                mensaje: 'El usuario ya existe'
            });
        }

        // encriptar password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            nombre,
            email,
            password: hashedPassword,
            rol
        });

        await user.save();

        res.status(201).json({
            mensaje: 'Usuario registrado correctamente'
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error en registro',
            error
        });

    }

};


// LOGIN
const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                mensaje: 'Credenciales inválidas'
            });
        }

        const validPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({
                mensaje: 'Credenciales inválidas'
            });
        }

        // TOKEN
        const token = jwt.sign(
            {
                id: user._id,
                rol: user.rol
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        );

        res.json({
            mensaje: 'Login exitoso',
            token
        });

    } catch (error) {

        res.status(500).json({
            mensaje: 'Error en login',
            error
        });

    }

};


module.exports = {
    register,
    login
};