// app.js or index.js

const express = require("express");
require("./config/config");
const restaurantRoutes = require("./routes/restaurantRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const personRoutes = require('./routes/personRoutes');
const app = express();

app.use(express.json());

app.use(restaurantRoutes);
app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);
app.use(personRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
