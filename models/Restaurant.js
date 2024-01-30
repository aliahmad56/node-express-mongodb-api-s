// models/restaurant.js
const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
  type: String,
  required: true,
},
  phoneNumber: String,
  location: String,
});

module.exports = mongoose.model("restaurants", restaurantSchema);
