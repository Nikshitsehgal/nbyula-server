var model = require("../model/model");

exports.setLogIn = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  model.signUpDB
    .findOne({
      username: req.body.username,
      password: req.body.password,
    })
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => console.log(err));
};

// exports.create = (req, res) => {
//   //validate request
//   if (!req.body) {
//     res.status(400).send({ message: "Content cannot be empty!" });
//     return;
//   }

//   //new field
//   const contactFormData = new model.contactFormDataDB({
//     name: req.body.name,
//     email: req.body.email,
//     message: req.body.message,
//   });

//   contactFormData
//     .save(contactFormData)
//     .then((data) => res.send("Saved Successfully"))
//     .catch((err) =>
//       res.status(500).send({
//         message: err.message || "some error occured while create operation",
//       })
//     );
// };

exports.setSignUp = (req, res) => {
  if (!req.body) {
    console.log("Got it here");
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }

  const signUpData = new model.signUpDB({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  signUpData
    .save(signUpData)
    .then((data) => {
      console.log("Account Successfully Created");
      res.send(true);
    })
    .catch((err) =>
      res.status(500).send({
        message: err.message || "some error occured while creating the account",
      })
    );
};

// exports.getmessages = (req, res) => {
//   model.contactFormDataDB
//     .find({})
//     .sort({ created_at: -1 })
//     .then((data) => res.send(data))
//     .catch((err) => console.log(err));
// };

// exports.getskills = (req, res) => {
//   model.skillDataDB
//     .find({})
//     .then((data) => res.send(data))
//     .catch((err) => console.log(err));
// };

// exports.createSkill = (req, res) => {
//   if (!req.body) {
//     res.status(400).send({ message: "Content cannot be empty!" });
//     return;
//   }

//   const skillData = new model.skillDataDB({
//     type: req.body.type,
//     skill: req.body.skill,
//   });

//   skillData
//     .save(skillData)
//     .then((data) => res.send("Saved"))
//     .catch((err) =>
//       res.status(500).send({
//         message: err.message || "some error occured while create operation",
//       })
//     );
// };

// exports.deleteskill = (req, res) => {
//   model.skillDataDB
//     .findByIdAndDelete(req.body.id)
//     .then((data) => res.send(data))
//     .catch((err) =>
//       res.status(500).send({
//         message: err.message || "some error occured while delete operation",
//       })
//     );
// };

// exports.getPortfolio = (req, res) => {
//   model.portfolioDataDB
//     .find({})
//     .then((data) => res.send(data))
//     .catch((err) => console.log(err));
// };

// exports.createPortfolio = (req, res) => {
//   if (!req.body) {
//     res.status(400).send({ message: "Content cannot be empty!" });
//     return;
//   }

//   const portfolioData = new model.portfolioDataDB({
//     type: req.body.type,
//     name: req.body.name,
//     link: req.body.link,
//   });

//   portfolioData
//     .save(portfolioData)
//     .then((data) => res.send("Saved"))
//     .catch((err) =>
//       res.status(500).send({
//         message: err.message || "some error occured while create operation",
//       })
//     );
// };

// exports.deletePortfolio = (req, res) => {
//   model.portfolioDataDB
//     .findByIdAndDelete(req.body.id)
//     .then((data) => res.send(data))
//     .catch((err) =>
//       res.status(500).send({
//         message: err.message || "some error occured while delete operation",
//       })
//     );
// };
