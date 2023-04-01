const jwt = require("jsonwebtoken");
const isAuthorized = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    res.status(206).send({ msg: "You are not Authorized for this action" });
  } else {
    token = token.split(" ")[1];
    jwt.verify(token, "devn5900", (err, code) => {
      if (code) {
        req.body.userId = code._id;
        console.log(code);
        next();
      } else {
        res.status(206).send({ msg: "You are not Authorized for this action" });
      }
    });
  }
  try {
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", code: "18" });
  }
};

module.exports = {
  isAuthorized,
};
