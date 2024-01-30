
// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  courses: [
    {
      courseName: String,
      grade: String,
    },
  ],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
