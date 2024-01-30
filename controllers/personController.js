// controllers/personController.js
const Person = require('../models/OneToOneEmbeeded/Person');

const createPerson = async (req, res) => {
  try {
    const { name, age, address } = req.body;
    const newPerson = new Person({ name, age, address });
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const getPersonsWithAddresses = async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  createPerson,
  getPersonsWithAddresses,
};
