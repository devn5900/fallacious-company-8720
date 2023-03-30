const { Router } = require("express");
const { isAuthorized } = require("../middlewares/authorization.middleware");
const {
  getCart,
  addToCart,
  removeFromCart,
} = require("../controllers/carts.controller");

const cartRouter = Router();

cartRouter.get("/", isAuthorized, getCart);
cartRouter.post("/:id", isAuthorized, addToCart);
cartRouter.delete("/:id", isAuthorized, removeFromCart);

cartRouter.all("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});
module.exports = {
  cartRouter,
};
