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
  description: {
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
  seatsavaliable: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  boarding: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  
}, { timestamps: true });

const Cruise = mongoose.model('Cruise', cruiseSchema);

const cruise=new Cruise({
  name: '6 Night Nile River Cruise in Egypt',  
  destination: 'Alexandria',
    description: 'Nile cruises offer a wide range of tour package options that let you explore Egypt to the full. Tourists can have a wonderful time on our world-class Nile cruise',
    duration: 5,
    price: 15500,
    seatsavaliable: 33,
    image:'https://serving.photos.photobox.com/1089702650301a995818d44b474b933c76730986be58d63528e97e773726005299f4f893.jpg',
    boarding: 'The Nile River from Aswan',
    date: new Date("2023-09-27"),
});
cruise.save();



module.exports = Cruise;
