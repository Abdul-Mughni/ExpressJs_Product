const express = require("express");

const App = express();

const dotenv = require("dotenv").config();

App.use(express.urlencoded({ extended: true }));

const { getProduct, sendProduct ,getAllProdcut } = require("./Controllers/UserController");

App.set("view engine", "ejs");

App.route("/").get(getProduct).post(sendProduct);

App.listen(process.env.PORT, function () {
  console.log(`Port is running at ${process.env.PORT}`);
});
App.route("/prolist").get(getAllProdcut)