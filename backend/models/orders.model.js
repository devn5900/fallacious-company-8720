const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    orders: { type: [{ type: Object }], required: true },
  },
  {
    versionKey: false,
  }
);

const ordersModel = mongoose.model("orders", ordersSchema);

module.exports = {
  ordersModel,
};
