const { cartsModel } = require("../models/carts.model");
const { prodModel } = require("../models/products.model");
const mongoose = require("mongoose");
const getCart = async (req, res) => {
  const id = req.body.userId;
  try {
    const status = await cartsModel.findOne({ userId: id }).exec();
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
      let status = await cartsModel.findOneAndUpdate({ userId: id });
      if (!status) {
        const ifNoItem = new cartsModel({
          userId: id,
          cart: [{ ...data.toObject(), quantity: 1 }],
        });
        status = await ifNoItem.save();
      } else {
        let cartData = [...status.toObject().cart];
        if (isHas(cartData, data)) {
          status.cart = cartData.map((el) => {
            let newId = el._id.toString().split('"')[0];
            let dataId = data._id.toString().split('"')[0];
            if (newId == dataId) {
              el.quantity++;
            }
            return el;
          });
        } else {
          status.cart = [
            ...status.toObject().cart,
            { ...data.toObject(), quantity: 1 },
          ];
        }
        await status.save();
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
    const data = await cartsModel.findOne({ userId: id });

    if (data) {
      let cartData = [...data.toObject().cart];

      data.cart = cartData.filter((el) => {
        let newId = el._id.toString().split('"')[0];
        console.log(pordId);
        if (newId == pordId) {
          return false;
        } else {
          return el;
        }
      });
      await data.save();
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

const isHas = (cartData, data) => {
  for (let i = 0; i < cartData.length; i++) {
    let newId = cartData[i]._id.toString().split('"')[0];
    let dataId = data._id.toString().split('"')[0];
    if (newId == dataId) {
      return true;
    }
  }
  return false;
};
module.exports = {
  getCart,
  addToCart,
  removeFromCart,
};
