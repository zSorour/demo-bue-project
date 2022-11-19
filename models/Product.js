const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: {
    type: 'String',
    required: true
  },
  description: {
    type: 'String',
    required: true
  },
  price: {
    type: 'Number',
    required: true
  },
  imgURL: {
    type: 'String'
  },
  supplierId: {
    type: Schema.Types.ObjectId,
    ref: 'supplier',
    required: true
  }
});

// the first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// therefore, in this case, the model we create will be mapped to the "products" collection.
const ProductModel = model('product', ProductSchema);

module.exports = ProductModel;
