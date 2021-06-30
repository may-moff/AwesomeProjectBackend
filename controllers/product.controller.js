const ProductModel = require("../models/ProductModel");

const create = async (req, res) => {
  console.log("hiii");

  try {
    const { title, img, desc } = req.body;
    const product = new ProductModel({ title, img, desc });
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Cant create product",
      error,
    });
  }
};
// podfjgposfgjpsofjgpsfogj
const show = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Can't show you all products",
      error,
    });
  }
};

module.exports = { create, show };
