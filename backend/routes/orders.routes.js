const { Router } = require("express");
const { isAuthorized } = require("../middlewares/authorization.middleware");
const {
  getOrder,
  addToOrders,
  removeFromOrders,
} = require("../controllers/orders.controller");

const ordersRouter = Router();

ordersRouter.get("/", isAuthorized, getOrder);
ordersRouter.post("/add", isAuthorized, addToOrders);
ordersRouter.delete("/delete/:id", isAuthorized, removeFromOrders);

ordersRouter.all("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});
module.exports = {
  ordersRouter,
};
