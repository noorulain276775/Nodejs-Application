const express = require("express");
const app = express();
const products = require("./routes/product");
app.use(express.json());
app.use("/api/", products);
module.exports = app;
