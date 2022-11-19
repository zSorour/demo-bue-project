const { ObjectId } = require('mongoose').Types;

const ProductModel = require('../models/Product');

module.exports.findAllProducts = async () => {
  try {
    const products = await ProductModel.find();
    return products;
  } catch (err) {
    throw new Error('Could not retrieve products.');
  }
};

module.exports.findProductById = async (productId) => {
  try {
    const product = await ProductModel.findById(productId).populate(
      'supplierId'
    );
    return product;
  } catch (err) {
    throw new Error('Could not find product.');
  }
};

module.exports.addNewProduct = async (productInfo) => {
  try {
    const product = new ProductModel({
      name: productInfo.name,
      description: productInfo.description,
      price: productInfo.price,
      imgURL: productInfo.imgURL,
      supplierId: new ObjectId(productInfo.supplierId)
    });
    const createdProduct = await product.save();
    return createdProduct;
  } catch (err) {
    throw new Error('Could not create product.');
  }
};

module.exports.removeProduct = async (productId) => {
  try {
    await ProductModel.deleteOne({ _id: productId });
  } catch (err) {
    throw new Error('Could not remove product.');
  }
};
