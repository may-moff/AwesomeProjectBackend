const mongoose = require("mongoose");

const ProductModel = new mongoose.schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  desc: { type: String },
});

module.exports = mongoose.model("Product", ProductModel);
