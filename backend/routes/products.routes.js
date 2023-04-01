const { Router } = require("express");
const {
  getProducts,
  getSingleProd,
  updateProduct,
} = require("../controllers/products.controller");
const { isAuthorized } = require("../middlewares/authorization.middleware");
const prodRouter = Router();

prodRouter.get("/", getProducts);
prodRouter.get("/:id", getSingleProd);
prodRouter.patch("/:id", isAuthorized, updateProduct);

prodRouter.all("*", (req, res) => {
  res.status(404).send({ msg: "Not Found" });
});
module.exports = {
  prodRouter,
};
