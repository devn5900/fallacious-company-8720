const mongoose = require("mongoose");
require("dotenv").config();
const connection = async () => {
  try {
    await mongoose.connect(process.env.dburl);
    console.log("connected to db");
  } catch (error) {
    console.log("Error while connecting to db");
  }
};

module.exports = {
  connection,
};
