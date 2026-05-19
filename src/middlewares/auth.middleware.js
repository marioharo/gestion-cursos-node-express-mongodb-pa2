const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    try {

        const authHeader = req.header('Authorization');

        if (!authHeader) {
            return res.status(401).json({
                mensaje: 'Acceso denegado. Token requerido'
            });
        }

        // Extraer el token después de "Bearer "
        const token = authHeader.replace('Bearer ', '').trim();

        if (!token) {
            return res.status(401).json({
                mensaje: 'Token inválido'
            });
        }

        const verified = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = verified;

        next();

    } catch (error) {

        res.status(401).json({
            mensaje: 'Token inválido'
        });

    }

};

module.exports = authMiddleware;