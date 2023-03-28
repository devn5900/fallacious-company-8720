const { Router } = require("express");
const {
  getProducts,
  getSingleProd,
} = require("../controllers/products.controller");
const prodRouter = Router();

prodRouter.get("/", getProducts);
prodRouter.get("/:id", getSingleProd);

prodRouter.all("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});
module.exports = {
  prodRouter,
};
