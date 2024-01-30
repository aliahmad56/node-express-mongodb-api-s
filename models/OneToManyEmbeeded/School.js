// models/School.js
const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: String,
  students: [
    {
      name: String,
      grade: String,
    },
  ],
});

const School = mongoose.model('School', schoolSchema);

module.exports = School;
