const mongoose = require('mongoose');

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
image:{
type: String,
required:true
},
image2:{
  type: String,
  required:true
  },
  image3:{
    type: String,
    required:true
    }
  
}, { timestamps: true });

const cairotours = mongoose.model('cairotours', cairotoursSchema);



const cai=new cairotours({
    name: 'Private Full-Day Tour Visiting Giza Pyramids',  
      date: new Date("2023-09-27"),
      duration: 5,
      price: 550,
      description: 'our tour manager from Memphis Tours will pick you up from your hotel in Cairo, starting your Pyramid Tours visiting the Pyramids of Cheops, Chephren and Mykerinus. Then proceed to visit the Great Sphinx, the head of a pharaoh with a lions body, dates from the time of Chephren',
      ticketsavailable: 4,
      image:'https://serving.photos.photobox.com/26174230e94a4b8f3ff5ccecf70e690969222b5edd293c1ab97c7f2cb1f6dcfacc2970a6.jpg',
      image2:'https://serving.photos.photobox.com/26174230e94a4b8f3ff5ccecf70e690969222b5edd293c1ab97c7f2cb1f6dcfacc2970a6.jpg',
      image3:'https://serving.photos.photobox.com/26174230e94a4b8f3ff5ccecf70e690969222b5edd293c1ab97c7f2cb1f6dcfacc2970a6.jpg'
});
cai.save();


module.exports = cairotours;
