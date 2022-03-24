const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Include the product name"],
  },
  price: {
    type: Number,
    required: [true, "Please Include the product price"],
  },
 description: {
    type: String,
    required: true,
  },
  category:{
    type: String
  },
  image: {
    type:String
  },
  inc:{
    type:Number
  },
  qnt:{
    type:Number
  }
});

mongoose.model('Product', productSchema);