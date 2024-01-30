// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/students', studentController.createStudent);
router.get('/students', studentController.getStudentsWithCourses);
router.get('/students/:studentId', studentController.getStudentWithCourses);

module.exports = router;