// routes/restaurantRoutes.js

const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

router.post('/addrestaurant', restaurantController.addRestaurant);
router.get('/showrestaurant', restaurantController.showRestaurant);
router.put('/updatedresto/:id', restaurantController.updateRestaurant);
router.delete('/deleteresto/:id', restaurantController.deleteRestaurant);

module.exports = router;
