const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  carbohydrated: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  fiber: {
    type: Number,
    required: true,
  },
});

const foodModel = mongoose.model("foods", foodSchema);

module.exports = foodModel;
