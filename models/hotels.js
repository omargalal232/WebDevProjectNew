const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelsSchema = new Schema({
  name: {
    type: String,
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
  image1: {
    type: String,
    required: true
  },
  image2: {
    type: String,
    required: true
  },
  image3: {
    type: String,
    required: true
  },
  usersWithWishlist: [
    {
      type: Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model
    },
  ],
}, { timestamps: true });

const hotels = mongoose.model('hotels', hotelsSchema);

module.exports = hotels;