const mongoose = require('mongoose');

const hotelsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description:{
    type: String,
    required:true
  },
image:{
type: String,
required:true
},


  
}, { timestamps: true });

const hotels = mongoose.model('hotels', hotelsSchema);
// const hotel=new hotels({
//     name: 'mariot',  
//       price: 5000,
//       description:'mariot hotel',
//       image:'https://serving.photos.photobox.com/1089702650301a995818d44b474b933c76730986be58d63528e97e773726005299f4f893.jpg'
     

//     });
// hotel.save();


module.exports = hotels;
