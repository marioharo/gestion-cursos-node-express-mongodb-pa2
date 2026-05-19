const express = require('express');

const router = express.Router();

const {
    createEnrollment,
    getEnrollments
} = require('../controllers/enrollment.controller');

const authMiddleware = require('../middlewares/auth.middleware');


// GET
router.get(
    '/',
    authMiddleware,
    getEnrollments
);


// POST
router.post(
    '/',
    authMiddleware,
    createEnrollment
);


module.exports = router;