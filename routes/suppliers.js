const { Router } = require('express');

// import the suppliers validator
const suppliersValidator = require('../validators/suppliers');

const suppliersController = require('../controllers/suppliers');

const suppliersRouter = Router();

suppliersRouter.get('/', suppliersController.getSuppliers);

suppliersRouter.post(
  '/',
  suppliersValidator.valdiatePostSupplier(), // call our function that returns an array of middlewares for valdiation
  suppliersController.postSupplier
);

module.exports = suppliersRouter;
