const mongoose = require('mongoose');

const cruiseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  
}, { timestamps: true });

const Cruise = mongoose.model('Cruise', cruiseSchema);

module.exports = Cruise;
