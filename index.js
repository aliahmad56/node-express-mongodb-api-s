// app.js or index.js

const express = require('express');
const cors = require('cors');
const app = express();
const restaurantRoutes = require('./routes/restaurantRoutes');
require('./config/config');

app.use(cors());
app.use(express.json());

// Use the restaurantRoutes as middleware
app.use(restaurantRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
