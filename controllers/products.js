const productsService = require('../services/products');

module.exports.getProducts = async (req, res) => {
  try {
    const products = await productsService.findAllProducts();
    return res.send({ products });
  } catch (err) {
    // this denotes a server error, therefore status code should be 500.
    res.status(500);
    return res.send({
      error: err.message
    });
  }
};

module.exports.getProduct = async (req, res) => {
  // notice how we extract the productId from the dynamic route that should be /products/:productId
  const productId = req.params.productId;
  try {
    const product = await productsService.findProductById(productId);
    if (!product) {
      return res.status(404).send({
        error: 'Product not found.'
      });
    }
    return res.send({
      product: product
    });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
};

module.exports.postProduct = async (req, res) => {
  const productInfo = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    imgURL: req.body.imgURL,
    supplierId: req.body.supplierId
  };
  try {
    const createdProduct = await productsService.addNewProduct(productInfo);
    return res.status(201).send({
      msg: 'Product created successfully.',
      productId: createdProduct._id
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};

module.exports.deleteProduct = async (req, res) => {
  const productId = req.params.productId;
  try {
    await productsService.removeProduct(productId);
    return res.send({
      msg: 'Product deleted successfully.'
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};
