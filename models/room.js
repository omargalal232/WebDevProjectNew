const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hotels',
    required: true
  },
  // roomNumber: {
  //   type: String,
  //   required: true
  // },
  // other room fields
});

const Room = mongoose.model('Room', roomSchema);

// const room = new Room({


//     hotel:'647f31aecb4a1882482a0103',
//     roomNumber: 2,

//     // set other booking fields
//   });
  
//   room.save()
//     .then(() => {
//       console.log('Room created successfully');
//     })
//     .catch((error) => {
//       console.error('Failed to create booking:', error);
//     });



module.exports = Room;