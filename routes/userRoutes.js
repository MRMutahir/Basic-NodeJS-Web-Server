const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers) // Get all users
  .post(userController.createUser); // Create new user

router
  .route("/:id")
  .get(userController.getUserById) // Get a user by ID
  .put(userController.updateUser) // Update user by ID
  .delete(userController.deleteUser); // Delete user by ID

module.exports = router;
