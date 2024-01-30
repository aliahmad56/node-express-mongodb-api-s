const Product = require("../models/OneToManyRefrence/Product");

const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = new Product({ name, price });
    const saveProduct = await newProduct.save();
    res.status(201).json(saveProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Errors");
  }
};

module.exports = {
  createProduct,
};
