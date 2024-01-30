const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
router.post(
  "/users",
  userController.userValidationRules,
  userController.validate,
  userController.createUser
);

module.exports = router;
