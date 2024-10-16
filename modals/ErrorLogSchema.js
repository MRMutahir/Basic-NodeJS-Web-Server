const mongoose = require("mongoose");

const errorLogSchema = new mongoose.Schema(
  {
    apiEndPoint: {
      type: String,
      required: true,
      index: true,
    },
    apiMethod: {
      type: String,
      required: true,
      enum: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    },
    apiErrorMessage: {
      type: String,
      required: true,
      default: null,
    },
    apiErrorStack: {
      type: String,
      required: false,
      default: null,
    },
    apiErrorCode: {
      type: Number,
      required: true,
      default: 400,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("errorLogs", errorLogSchema);
