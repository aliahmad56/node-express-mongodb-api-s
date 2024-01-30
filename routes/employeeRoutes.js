const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.post('/createemployee', employeeController.createEmployee);
router.post('/createdepartment', employeeController.createDepartment);
router.get('/employedepartment', employeeController.getEmployeesWithDepartments);

module.exports = router;