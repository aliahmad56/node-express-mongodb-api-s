// controllers/restaurantController.js

const Restaurant = require("../models/Restaurant");

exports.addRestaurant = async (req, res) => {
  try {
    console.log("comming");
    // const {name, phoneNumber, location} = req.body;
    const newRestaurant = new Restaurant(req.body);
    const result = await newRestaurant.save();
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Could not add restaurant" });
  }
};

exports.showRestaurant = async (req,res)=>{
  try{  
  const restaurantList = await Restaurant.find();
    if(restaurantList.length > 0 )
    {
      res.send(restaurantList);
    }
    else{

      res.send("No Data Found");
    }
  }
  catch(error){
    res.send(error);
  }

};

exports.updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate( req.params.id, req.body,{ new: true });
    res.json(restaurant);
  } catch (error) {
    res.json(error);
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const result = await Restaurant.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Could not delete restaurant" });
  }
};
