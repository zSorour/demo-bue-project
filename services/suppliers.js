const SupplierModel = require('../models/Supplier');

module.exports.addNewSupplier = async (supplierInfo, supplierCoords) => {
  const supplier = new SupplierModel({
    name: supplierInfo.name,
    email: supplierInfo.email,
    address: supplierInfo.address,
    imgURL: supplierInfo.imgURL,
    location: {
      lat: supplierCoords.lat,
      lng: supplierCoords.lon
    }
  });
  try {
    const addedSupplier = await supplier.save();
    return addedSupplier;
  } catch (error) {
    console.log(error);
    throw new Error('Could not add supplier.');
  }
};

module.exports.findAllSuppliers = async () => {
  try {
    const suppliers = await SupplierModel.find();
    return suppliers;
  } catch (err) {
    throw new Error('Could not retrieve suppliers.');
  }
};
