// import Express Router from express
const { Router } = require('express');

// import our productsController
const productsController = require('../controllers/products');
const authMiddlewares = require('../middelwares/authorization');

// create an instance of Express Router.
const productsRouter = Router();

// whenever we receive a GET request on products route '/',
// we will invoke the getProducts method in the products controller.
productsRouter.get('/', productsController.getProducts);

// whenever we receive a POST request on products route '/',
// we will invoke the postProduct method in the products controller.
productsRouter.post('/', authMiddlewares.auth, productsController.postProduct);

// whenever we receive a GET request on products DYNAMIC route '/:productId',
// we will invoke the getProduct method in the products controller that extracts the productId
productsRouter.get('/:productId', productsController.getProduct);

productsRouter.delete('/:productId', productsController.deleteProduct);

// export the router instance we created.
module.exports = productsRouter;
