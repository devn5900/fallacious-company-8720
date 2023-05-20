const { ordersModel } = require("../models/orders.model");
const { prodModel } = require("../models/products.model");
const { ObjectId } = require("mongoose");
const getOrder = async (req, res) => {
  const id = req.body.userId;
  try {
    const status = await ordersModel
      .findOne({ userId: id })
      .populate("orders")
      .exec();
    if (status) {
      res.status(200).send(JSON.stringify({ data: status }));
    } else {
      res.status(200).send({ msg: "There is no item in your order" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", code: "13" });
  }
};
const addToOrders = async (req, res) => {
  const id = req.body.userId;
  let orderData = req.body.orderData;
  let query = {};

  if (orderData && Array.isArray(orderData)) {
    query.$or = [];
    orderData?.forEach((el) => {
      query.$or.push({ _id: el });
    });
  } else {
    res.status(206).send({ msg: "Partial Content" });
    return;
  }
  try {
    const data = await prodModel.find({ userId: id });
    if (data) {
      let status = await ordersModel.findOneAndUpdate(
        { userId: id },
        { $push: { orders: [...orderData] } }
      );
      if (!status) {
        const ifNoItem = new ordersModel({
          userId: id,
          orders: [...orderData],
        });
        await ifNoItem.save();
      }
      res.status(200).send(JSON.stringify({ msg: "Orderd Added " }));
    } else {
      res.status(206).send({ msg: "You are not Authorized for this action" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", code: "18" });
  }
};
const removeFromOrders = async (req, res) => {
  const id = req.body.userId;
  const pordId = req.params.id;
  try {
    const data = await ordersModel.findOneAndUpdate(
      { userId: id },
      { $pull: { orders: pordId } }
    );
    if (data) {
      res
        .status(200)
        .send(JSON.stringify({ msg: "Product removed from Order " }));
    } else {
      res.status(206).send({ msg: "You are not Authorized for this action" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", code: "59" });
  }
};
module.exports = {
  getOrder,
  addToOrders,
  removeFromOrders,
};
