// controllers/studentController.js
const Student = require('../models/ManytoManyEmbeeded/Student');

const createStudent = async (req, res) => {
  try {
    const { name, courses } = req.body;
    const newStudent = new Student({ name, courses });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getStudentsWithCourses = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


const getStudentWithCourses = async (req, res) => {
    try {
      const studentId = req.params.studentId; // Assuming you're using a route parameter like /students/:studentId
      const student = await Student.findOne({ _id: studentId });
      
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      res.status(200).json(student);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

module.exports = {
  createStudent,
  getStudentsWithCourses,
  getStudentWithCourses,
};
