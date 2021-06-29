const express = require("express");
const controller = require("../controllers/product.controller.js");

const productRouter = express.Router();

productRouter.get("/find", controller.find);
productRouter.post("/create", controller.create);

module.exports = productRouter;
