const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  guestName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  // other booking fields
});

// Custom validation to check for overlapping bookings
bookingSchema.pre('save', async function (next) {
  const Booking = mongoose.model('Booking');

  const bookings = await Booking.find({
    room: this.room,
    startDate: { $lt: this.endDate },
    endDate: { $gt: this.startDate }
  });

  if (bookings && bookings.length > 0) {
    const errorMessage = 'This room is already booked for the selected dates';
    return next(new Error(errorMessage));
  }

  next();
});

const Booking = mongoose.model('Booking', bookingSchema);
// const booking = new Booking({
//     room: '647dc209812df0e9464de0e1',
//     guestName:'64754d8020d46b68067621e3' ,
//     startDate: '2023-7-20',
//     endDate: '2023-7-22',
//     // set other booking fields
//   });
  
//   booking.save()
//     .then(() => {
//       console.log('Booking created successfully');
//     })
//     .catch((error) => {
//       console.error('Failed to create booking:', error);
//     });


module.exports = Booking;