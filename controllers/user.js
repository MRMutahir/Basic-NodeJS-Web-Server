// controllers/userController.js

const User = require("../modals/user.js");

// Create a new user
exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.json({ success: true, user });
  } catch (error) {
    // res.status(400).json({ success: false, message: error.message });
    console.log("error", error);
    next(error);
  }
};

// Get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    // res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

// Get a user by ID
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    // res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

// Update a user by ID
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    // res.status(400).json({ success: false, message: error.message });
    next(error);
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(204).json({ success: true, message: "User deleted" });
  } catch (error) {
    // res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};
