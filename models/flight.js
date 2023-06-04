const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  boarding: {
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
  seatsavailable: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  flightnumber: {
    type: Number,
    required: true
  },
  from:
  {
type:String,
required:true

  },
  to:
  {
type:String,
required:true

  }
}, { timestamps: true });

const Flight = mongoose.model('flight', flightSchema);

const flig = new Flight({
  boarding: 'Private Full-Day Tour Visiting Giza Pyramids',
  destination: 'gouna',
  duration: 5,
  price: 550,
 seatsavailable: 4,
  image: 'https://serving.photos.photobox.com/57208297cf565935a56fa20779511a39e4a67146c4c65dcfc4ac08e7688b981fa65b3230.jpg',
  flightnumber: 1001,
  from :"hurghada" ,
  to : "italy",
});
flig.save();

module.exports = Flight;