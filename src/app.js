const crypto = require('crypto');
global.crypto = crypto;
const enrollmentRoutes = require('./routes/enrollment.routes');

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const courseRoutes = require('./routes/course.routes');

const authRoutes = require('./routes/auth.routes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.get('/', (req, res) => {
    res.json({
        mensaje: 'API Gestión de Cursos funcionando 🚀'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});