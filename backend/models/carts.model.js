const mongoose = require("mongoose");

const cartsSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    cart: { type: [{ type: "ObjectId", ref: "products" }], required: true },
  },
  {
    versionKey: false,
  }
);

const cartsModel = mongoose.model("carts", cartsSchema);

module.exports = {
  cartsModel,
};
