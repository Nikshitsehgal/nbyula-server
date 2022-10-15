const mongoose = require("mongoose");

var signUpSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

const signUpDB = mongoose.model("signUpData", signUpSchema);

exports.signUpDB = signUpDB;
