const { cartsModel } = require("../models/carts.model");
const { prodModel } = require("../models/products.model");

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
  console.log(id, pordId);
  try {
    // .updateMany({userId:"6423e6fefa7dacbedd2440a8"},{$pull:{"cart":{_id:ObjectId("6422b24fd7e903639c08aa85")}}
    const data = await prodModel.updateMany(
      { userId: id },
      { $pull: { cart: pordId } }
    );
    console.log(data);
    if (data) {
      res
        .status(200)
        .send(JSON.stringify({ msg: "Product Added ", data: data }));
    } else {
      res.status(206).send({ msg: "You are not Authorized for this action" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", code: "60" });
  }
};
module.exports = {
  getCart,
  addToCart,
  removeFromCart,
};
