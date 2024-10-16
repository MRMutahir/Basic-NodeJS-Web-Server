const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const app = express();
dotenv.config();

// MongoDB connection
mongoose
  .connect(process.env.URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Middleware
app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Routes
app.get("/", (req, res, next) => {
  res.send("SALAM ");
});
app.use("/api/users", userRoutes);

module.exports = app;
