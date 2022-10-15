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
    })
    .catch((err) => console.log(err));
};

exports.setSignUp = (req, res) => {
  if (!req.body) {
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

exports.updateUserData = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty!" });
    return;
  }
  console.log(req.body);
  model.signUpDB
    .updateOne(
      { _id: req.body._id },
      {
        $set: {
          username: req.body.username,
          fullName: req.body.fullName,
          email: req.body.email,
          password: req.body.password,
        },
      }
    )
    .then((data) => {
      res.send(data);
    })
    .catch((err) =>
      res.status(500).send({
        message: err.message || "some error occured while creating the account",
      })
    );
};

exports.getUserData = (req, res) => {
  model.signUpDB
    .findOne({ email: req.params.email })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
};
