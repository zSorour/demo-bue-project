const { check } = require('express-validator');

module.exports.valdiatePostSupplier = () => {
  const validationMiddlewares = [
    check('name').notEmpty().withMessage('Supplier name cannot be empty.'),
    check('email').isEmail().withMessage('Supplier email is invalid.'),
    check('address').notEmpty().withMessage('Suppler address cannot be empty.')
  ];
  return validationMiddlewares;
};
