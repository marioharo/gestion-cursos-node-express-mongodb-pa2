const roleMiddleware = (...rolesPermitidos) => {

    return (req, res, next) => {

        try {

            const rolUsuario = req.user.rol;

            if (!rolesPermitidos.includes(rolUsuario)) {

                return res.status(403).json({
                    mensaje: 'No tienes permisos'
                });

            }

            next();

        } catch (error) {

            res.status(500).json({
                mensaje: 'Error en roles'
            });

        }

    };

};

module.exports = roleMiddleware;