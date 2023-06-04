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
url:{
  type:String,
  required:true
}
  
}, { timestamps: true });

const hotels = mongoose.model('hotels', hotelsSchema);
const hotel=new hotels({
    name: 'hilton cairo',  
      price: 5000,
      description:'mariot tagmoa',
      image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com%2FHotel_Review-g294201-d300669-Reviews-Ramses_Hilton-Cairo_Cairo_Governorate.html&psig=AOvVaw1t7cktlNzhk2g0FWr-guoa&ust=1685882739327000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjs4-CQp_8CFQAAAAAdAAAAABAE.jpg',
      url:'/hotel/hotelmariot'

    });
hotel.save();


module.exports = hotels;
