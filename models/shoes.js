const mongoose = require("mongoose");

const shoesSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: Array, required: true },
  id: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: Array, required: true },
  color: { type: Array, required: true},
  barCode: { type: String, required: true }
});

module.exports = mongoose.model("Shoes", shoesSchema);
