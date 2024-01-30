// models/Person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: {
    street: String,
    city: String,
    zip: String,
  },
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
