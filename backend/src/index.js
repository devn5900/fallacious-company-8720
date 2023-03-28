const express = require("express");
const cors = require("cors");
const { connection } = require("../connection/db.con");
const { prodRouter } = require("../routes/products.routes");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
/**************Add Your Routes here *******************/
app.use("/products", prodRouter);
/******************************************************/
app.get("/", (req, res) => {
  res
    .status(200)
    .contentType("text/html")
    .send("<h1>Welcome to Construct Week API</h1>");
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
  connection();
});
