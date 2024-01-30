// controllers/schoolController.js
const School = require('../models/OneToManyEmbeeded/School');

const createSchool = async (req, res) => {
  try {
    const { name, students } = req.body;
    const newSchool = new School({ name, students });
    const savedSchool = await newSchool.save();
    res.status(201).json(savedSchool);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getSchoolsWithStudents = async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).json(schools);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createSchool,
  getSchoolsWithStudents,
};
