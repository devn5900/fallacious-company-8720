const { Router } = require("express");
const { regValid, logValid } = require("../middlewares/users.middlware");
const {
  register,
  login,
  addAddress,
} = require("../controllers/users.controller");
const { isAuthorized } = require("../middlewares/authorization.middleware");

const userRouter = Router();

userRouter.post("/register", regValid, register);
userRouter.post("/login", logValid, login);
userRouter.patch("/address", isAuthorized, addAddress);
userRouter.all("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});

module.exports = {
  userRouter,
};
