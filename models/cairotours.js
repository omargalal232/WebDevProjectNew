const mongoose = require('mongoose');
const { Schema } = mongoose;
const cairotoursSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
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
  ticketsavailable: {
    type: Number,
    required: true
  },
img1:{
type: String,
required:true
},
img2:{
  type: String,
  required:true
  },
  img3:{
    type: String,
    required:true
    },
    usersWithWishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: "User", // Assuming you have a User model
      },
    ],
  
}, { timestamps: true });

const cairotours = mongoose.model('cairotours', cairotoursSchema);



// const cai=new cairotours({
//     name: 'Private Full-Day Tour Visiting Giza Pyramids',  
//       date: new Date("2023-09-27"),
//       duration: 5,
//       price: 550,
//       description: 'our tour manager from Memphis Tours will pick you up from your hotel in Cairo, starting your Pyramid Tours visiting the Pyramids of Cheops, Chephren and Mykerinus. Then proceed to visit the Great Sphinx, the head of a pharaoh with a lions body, dates from the time of Chephren',
//       ticketsavailable: 5,
//       img1:'https://serving.photos.photobox.com/906296120b328dc6c8051dacb11625528da35375a28bcdb47f82b405e41fc168eb8aad1e.jpg',
//       img2:'https://serving.photos.photobox.com/38422983394cfdaa7b580844aa32db1295c5622f71d51aea7100eb80ffe704b032f8f359.jpg',
//       img3:'https://serving.photos.photobox.com/49477926628cffb9bbf71257bca8448be1eb69dbda4b84cecdf1a97891e64a4e2893c9dd.jpg'
// });
// cai.save();


module.exports = cairotours;
