const express = require('express');

const router = express.Router();

const {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/course.controller');

const authMiddleware = require('../middlewares/auth.middleware');

const roleMiddleware = require('../middlewares/role.middleware');


// GET
router.get('/', getCourses);

// POST
router.post(
    '/',
    authMiddleware,
    roleMiddleware('admin'),
    createCourse
);

// PUT
router.put(
    '/:id',
    authMiddleware,
    roleMiddleware('admin'),
    updateCourse
);

// DELETE
router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware('admin'),
    deleteCourse
);

module.exports = router;