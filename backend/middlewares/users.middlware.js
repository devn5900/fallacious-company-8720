const regValid = (req, res, next) => {
  const { name, email, password, confirm_pass } = req.body;
  if (!name || !email || !password || !confirm_pass) {
    res.status(206).send({ msg: "Invalid Data" });
    return;
  }
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof confirm_pass !== "string"
  ) {
    res.status(206).send({ msg: "Invalid Data" });
    return;
  }
  if (confirm_pass !== password) {
    res
      .status(206)
      .send({ msg: "Password and Confirm Password Should be same" });
    return;
  }
  next();
};
const logValid = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(206).send({ msg: "Invalid Credentials" });
    return;
  }
  if (typeof email !== "string" || typeof password !== "string") {
    res.status(206).send({ msg: "Invalid Credentials" });
    return;
  }
  next();
};
module.exports = {
  regValid,
  logValid,
};
