const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
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

const city = mongoose.model('city', citySchema);

const imagePath = path.join(__dirname, '../public/images/cairo.jpeg');
const image = fs.readFileSync(imagePath).toString('base64');

const cityy = new city({
  name: 'Cairo',
  description: 'Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts.sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
  image: 'https://serving.photos.photobox.com/490976834050f2044a0c18851068dacf868ca4afe4c258af7722c01e9ad7c1581f97b4a6.jpg'
});

cityy.save();

module.exports = city;