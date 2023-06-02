const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

}, { timestamps: true });


const cities = mongoose.model('cities', citySchema);

module.exports = cities;

