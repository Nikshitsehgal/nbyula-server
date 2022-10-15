const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

route.get("/", (req, res) => {
  res.send("Sending data");
});

route.post("/api/signUp", controller.setSignUp);
route.post("/api/logIn", controller.setLogIn);

// route.get("/api/getmessages", controller.getmessages);
// route.get("/api/getskills", controller.getskills);
// route.get("/api/getportfolio", controller.getPortfolio);

//API
// route.post("/api/contactform", controller.create);
// route.post("/api/login", controller.login);
// route.post("/api/skillset", controller.createSkill);
// route.post("/api/portfolioset", controller.createPortfolio);

//API Delete
// route.delete("/api/deleteskill", controller.deleteskill);
// route.delete("/api/deleteportfolio", controller.deletePortfolio);

module.exports = route;
