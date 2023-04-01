const { prodModel } = require("../models/products.model");

const getProducts = async (req, res) => {
  let query = {};
  let perPage = 10;
  let pagination = 1;
  let sortBy = "";
  const {
    q,
    sort,
    order,
    page,
    limit,
    min,
    max,
    type,
    category,
    design,
    brand,
    offer,
    discount,
  } = req.query;
  if (q) {
    // {$or: [{ brand: { $regex: ".*boo.*" } }, { name: { $regex: ".*Boo.*" } }]}
    query.$or = [
      { name: { $regex: `.*${q}.*`, $options: "$i" } },
      { description: { $regex: `.*${q}.*`, $options: "$i" } },
      { category: { $regex: `.*${q}.*`, $options: "$i" } },
      { design: { $regex: `.*${q}.*`, $options: "$i" } },
      { brand: { $regex: `.*${q}.*`, $options: "$i" } },
    ];
  }
  if (sort) {
    sortBy = { [sort]: order ? order : "asc" };
  }
  if (page) {
    pagination = +page;
  }
  if (limit) {
    perPage = +limit;
  }
  if (min && max) {
    query.price = { $gt: min, $lt: max };
  }
  if (type) {
    query.type = { $regex: `.*${type}.*` };
  }
  if (category) {
    if (Array.isArray(category)) {
      if (!query.$or) {
        query.$or = [];
      }
      category.forEach((el) => {
        query.$or.push({ category: { $regex: `.*${el}.*`, $options: "$i" } });
      });
    } else {
      query.category = { $regex: `.*${category}.*`, $options: "$i" };
    }
  }
  if (design) {
    query.design = { $regex: `.*${design}.*`, $options: "$i" };
  }
  if (brand) {
    query.brand = { $regex: `.*${brand}.*`, $options: "$i" };
  }
  if (offer) {
    query.offer = { $regex: `.*${offer}.*`, $options: "$i" };
  }
  if (discount) {
    query.discount = { $regex: `.*${discount}.*`, $options: "$i" };
  }
  //   console.log(query);
  try {
    const status = await prodModel
      .find(query)
      .sort(sortBy)
      .skip((pagination - 1) * perPage)
      .limit(perPage);

    res
      .status(200)
      .send(JSON.stringify({ total: status.length, data: status }));
  } catch (error) {
    res.status(400).send({ msg: "No Data Found" });
  }
};

const getSingleProd = async (req, res) => {
  const id = req.params.id;
  try {
    const status = await prodModel.findById({ _id: id });

    res.status(200).send(JSON.stringify({ data: status }));
  } catch (error) {
    res.status(400).status({ msg: "No Data Found" });
  }
};
const updateProduct = async (req, res) => {
  const prodId = req.params.id;
  const usrId = req.body.userId;
  delete req.body.userId;
  const data = req.body;
  try {
    const status = await prodModel.findByIdAndUpdate(
      { _id: prodId },
      { $set: data }
    );
    res.status(200).send({ msg: "Product updated" });
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error", code: 101 });
  }
};

module.exports = {
  getProducts,
  getSingleProd,
  updateProduct,
};
