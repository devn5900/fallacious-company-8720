const { cartsModel } = require("../models/carts.model");
const { prodModel } = require("../models/products.model");
const { ObjectId } = require("mongoose");
const getCart = async (req, res) => {
  const id = req.body.userId;
  try {
    const status = await cartsModel
      .findOne({ userId: id })
      .populate("cart")
      .exec();
    if (status) {
      res.status(200).send(JSON.stringify({ data: status }));
    } else {
      res.status(200).send({ msg: "There is no item in your cart" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", code: "13" });
  }
};
const addToCart = async (req, res) => {
  const id = req.body.userId;
  const pordId = req.params.id;
  console.log(id, pordId);
  try {
    const data = await prodModel.findById({ _id: pordId });
    if (data) {
      let status = await cartsModel.findOneAndUpdate(
        { userId: id },
        { $push: { cart: data._id } }
      );
      if (!status) {
        const ifNoItem = new cartsModel({ userId: id, cart: [data._id] });
        status = await ifNoItem.save();
      }
      res.status(200).send(JSON.stringify({ msg: "Product Added " }));
    } else {
      res.status(206).send({ msg: "You are not Authorized for this action" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", code: "18" });
  }
};
const removeFromCart = async (req, res) => {
  const id = req.body.userId;
  const pordId = req.params.id;
  try {
    const data = await cartsModel.findOneAndUpdate(
      { userId: id },
      { $pull: { cart: pordId } }
    );
    if (data) {
      res
        .status(200)
        .send(JSON.stringify({ msg: "Product removed from cart " }));
    } else {
      res.status(206).send({ msg: "You are not Authorized for this action" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", code: "59" });
  }
};
module.exports = {
  getCart,
  addToCart,
  removeFromCart,
};
