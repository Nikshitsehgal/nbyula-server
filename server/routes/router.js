const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

route.get("/", (req, res) => {
  res.send("Sending data");
});

route.get("/api/getUserData", controller.getUserData);

route.post("/api/signUp", controller.setSignUp);
route.post("/api/logIn", controller.setLogIn);

route.put("/api/updateUserData", controller.updateUserData);

module.exports = route;
