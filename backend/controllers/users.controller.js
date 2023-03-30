const { userModel } = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const isValid = await userModel.exists({ email: req.body.email });

    if (isValid) {
      res
        .status(200)
        .send({ msg: "You are already have an account Please Login" });
    } else {
      bcrypt.hash(req.body.password, 5, async (err, hash) => {
        if (hash) {
          req.body.password = hash;
          const status = new userModel(req.body);
          const isSaved = await status.save();

          res.status(200).send({ msg: "Registration Successfull !" });
        } else {
          res.status(500).send({ msg: "Internal Server Error", code: "11" });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", code: "15" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const status = await userModel.findOne({ email });
    if (!status) {
      res
        .status(200)
        .send({ msg: "You don't have an account Please Register yourself" });
    } else {
      bcrypt.compare(password, status.password, (err, stat) => {
        if (stat) {
          res.status(200).send({
            msg: "Login Successfull",
            token: jwt.sign(
              {
                _id: status._id,
                role: status.role,
              },
              "devn5900"
            ),
            data: { name: status.name, avatar: status.avatar },
          });
        } else {
          res.status(206).send({ msg: "Invalid Credentials" });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", code: "41" });
  }
};

module.exports = {
  register,
  login,
};
