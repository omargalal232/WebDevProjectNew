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
const city = new cities({ name: 'Introduction to Mongoose', description:'hi'});

      // save model to database
      city.save();
module.exports = cities;

