const Order = require("../models/OneToManyRefrence/Order");

const createOrder = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const newOrder = new Order({ user: userId, products: productId });
    const saveOrder = await newOrder.save();
    res.status(201).json(saveOrder);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const getOrdersWithDetails = async (req, res) => {
  try {
    const orders = await Order.find().populate("user").populate("products");
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createOrder,
  getOrdersWithDetails,
};
