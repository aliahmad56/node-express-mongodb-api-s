// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

router.post('/createschool', schoolController.createStudent);
router.get('/students', schoolController.getSchoolsWithStudents);

module.exports = router;