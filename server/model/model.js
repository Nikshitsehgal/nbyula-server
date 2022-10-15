const mongoose = require("mongoose");

var signUpSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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

// var Schema = new mongoose.Schema({
//   type: {
//     type: String,
//     required: true,
//   },
//   skill: {
//     type: String,
//     required: true,
//   },
// });

// var portfolioSchema = new mongoose.Schema({
//   type: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   link: {
//     type: String,
//     required: true,
//   },
// });

const signUpDB = mongoose.model("signUpData", signUpSchema);
// const skillDataDB = mongoose.model("skillData", skillSchema);
// const portfolioDataDB = mongoose.model("portfolioData", portfolioSchema);

exports.signUpDB = signUpDB;
// exports.skillDataDB = skillDataDB;
// exports.portfolioDataDB = portfolioDataDB;
