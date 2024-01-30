// controllers/employeeController.js
const Employee = require('../models/OneToOneRefrence/Employee');
const Department = require('../models/OneToOneRefrence/Department');

const createEmployee = async (req, res) => {
  try {
    const { name, position, departmentId } = req.body;
    const newEmployee = new Employee({ name, position, department: departmentId });
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getEmployeesWithDepartments = async (req, res) => {
  try {
    const employees = await Employee.find().populate('department');
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const createDepartment = async (req, res) => {
  try {
    const { name, location } = req.body;
    const newDepartment = new Department({ name, location });
    const savedDepartment = await newDepartment.save();
    res.status(201).json(savedDepartment);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createEmployee,
  getEmployeesWithDepartments,
  createDepartment,
};
