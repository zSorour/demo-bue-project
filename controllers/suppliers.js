// import the validationResult method from express validator
const { validationResult } = require('express-validator');

const azMapsService = require('../services/azMaps');
const suppliersService = require('../services/suppliers');

module.exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await suppliersService.findAllSuppliers();
    return res.send({ suppliers });
  } catch (err) {
    // this denotes a server error, therefore status code should be 500.
    res.status(500);
    return res.send({
      error: err.message
    });
  }
};

module.exports.postSupplier = async (req, res) => {
  // get validation errors in the form of an array.
  const validationErrors = validationResult(req).array();
  if (validationErrors.length > 0) {
    const firstError = validationErrors[0];
    return res.status(422).send({
      error: firstError.msg
    });
  }

  const supplierInfo = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    imgURL: req.body.imgURL
  };

  try {
    const supplierCoords = await azMapsService.geocodeAddress(req.body.address);
    // if supplierCoords is null, which means that no location is found using the given address
    if (!supplierCoords) {
      return res.status(422).send({
        error: 'Could not find a valid location using the given address.'
      });
    }

    const addedSupplier = await suppliersService.addNewSupplier(
      supplierInfo,
      supplierCoords
    );

    res.status(201).send({
      msg: 'Supplier added successfully.',
      supplierId: addedSupplier._id
    });
  } catch (err) {
    res.status(500);
    res.send({
      error: err.message
    });
  }
};
