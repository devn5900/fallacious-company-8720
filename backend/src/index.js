const express = require("express");
const cors = require("cors");
const { connection } = require("../connection/db.con");
const { prodRouter } = require("../routes/products.routes");
const { userRouter } = require("../routes/users.routes");
const { cartRouter } = require("../routes/carts.routes");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
/**************Add Your Routes here *******************/
app.use("/products", prodRouter);
app.use("/user", userRouter);
app.use("/cart", cartRouter);
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
