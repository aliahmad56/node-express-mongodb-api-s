const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController');

router.post('/person', personController.createPerson);
router.get('/persondetails', personController.getPersonsWithAddresses);

module.exports = router;