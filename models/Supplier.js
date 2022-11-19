const { model, Schema } = require('mongoose');

const SupplierSchema = new Schema({
  name: {
    type: 'String',
    required: true
  },
  email: {
    type: 'String',
    required: true
  },
  address: {
    type: 'String',
    required: true
  },
  location: {
    lat: {
      type: 'Number',
      required: true
    },
    lng: {
      type: 'Number',
      required: true
    }
  },
  imgURL: {
    type: 'String'
  }
});

const SupplierModel = model('supplier', SupplierSchema);

module.exports = SupplierModel;
