const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/user.js");
const connect_db = require("./DataBase/db.js");
const ErrorLog = require("./modals/ErrorLogSchema.js"); // ErrorLog schema import

dotenv.config();
const db = async () => await connect_db();
db();

const app = express();
app.use(express.json());

// Route for testing
app.get("/", (req, res) => {
  res.send("SALAM");
});

// All user routes
app.use("/api", userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  // console.log("req>>>>>>>>>>>", req);
  // console.log("res.statusCode >>>>>>>>>>>", res.statusCode );

  const errorLog = new ErrorLog({
    apiEndPoint: req.originalUrl, // Jo endpoint hit kiya gaya
    apiMethod: req.method, // GET, POST, etc.
    apiErrorMessage: err.message, // Error message
    apiErrorStack: err.stack || null, // Error stack trace (optional)
    apiErrorCode: res.statusCode,
  });

  console.log("errorLog", errorLog);
  // Save the error in the database
  errorLog
    .save()
    .then(() => {
      console.error(`Error Logged: ${err.message}`);
    })
    .catch((dbErr) => {
      console.error(`Database Save Error: ${dbErr.message}`);
    });

  // Response to client
  res.status(res.statusCode || 500).json({
    success: false,
    message: "Internal Server Error", // Generic message for client
    error: process.env.NODE_ENV === "development" ? err.message : undefined, // Only show details in development
  });
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
});
