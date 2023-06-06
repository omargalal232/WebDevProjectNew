const Hotel = require("../models/hotels");
const Room = require("../models/room");
const Booking = require("../models/booking");
const users = require("../models/users");






const gethotel = (req, res) => {
  Hotel.find()
    .then((result) => {
      res.render("hotel", { hotels: result, users: req.session.users || null });
    })
    .catch((err) => {
      console.log(err);
      res.render("hotel", { hotels: [], users: req.session.users || null });
    });
};

const gethoteldb = (req,res) => {
  Hotel.find()
  .then(result => {
      res.render("admin_hotel", { hotels: result, users: req.session.users || null });
  })
  .catch(err => {
      console.log(err)
  })
}


const searchhotel = (req,res) => {
  Hotel.find({name:req.body.name})
  .then(result => {
      res.render("hotel", { hotels: result, users: req.session.users || null });
  })
 
  .catch(err => {
      console.log(err)
      res.render("hotel", { hotels: [], users: req.session.users || null });
  })

}

    
// Define a route handler for the form submission

const bookroom = async (req, res) => {
  const hotelId = req.params.id;
  const { checkinDate, checkoutDate, guestName } = req.body;

  try {
    // Fetch the room by roomNumber and hotelId and populate the 'hotel' field
    const room = await Room.findOne({ hotel: hotelId }).populate('hotel');

    if (room) {
      // Check for overlapping bookings with the same room and dates
      const existingBooking = await Booking.findOne({
        room: room._id,
        startDate: { $lte: new Date(checkoutDate) },
        endDate: { $gte: new Date(checkinDate) }
      });

      if (!existingBooking) {
        // No overlapping bookings with the same room and dates

        // Create a new booking
        const booking = new Booking({
          room: room._id,
          startDate: new Date(checkinDate),
          endDate: new Date(checkoutDate)
        });

        // Save the booking
        await booking.save();

        // Redirect to a success page or display a success message
        res.render('success', { message: 'Room booked successfully' });
      } else {
        // There is an existing booking with the same room and dates
        res.render('err', { err: 'This room is already booked for the selected dates', users: (req.session.users === undefined ? "" : req.session.users) });

        // Find an available room in the same hotel for the given dates
        const overlappingBookings = await Booking.find({
          startDate: { $lt: new Date(checkoutDate) },
          endDate: { $gt: new Date(checkinDate) }
        }).select('room');

        const bookedRoomIds = overlappingBookings.map(booking => booking.room);

        const availableRoom = await Room.findOne({
          hotel: hotelId,
          _id: { $ne: room._id }, // Exclude the current room from the query
          _id: { $nin: bookedRoomIds } // Exclude the rooms with overlapping bookings
        }).populate('hotel');

        if (availableRoom) {
          // Book the available room with the same dates
          const booking = new Booking({
            room: availableRoom._id,
            startDate: new Date(checkinDate).toISOString(),
            endDate: new Date(checkoutDate).toISOString()
          });

          // Save the booking
          await booking.save();

          // Redirect to a success page or display a success message
          res.render('success', { message: 'Booked another room in the same hotel' });
        } else {
          // No other available rooms in the same hotel
          res.render('err', { err: 'No rooms available for the selected dates in this hotel', users: (req.session.users === undefined ? "" : req.session.users) });
        }
      }
    } else {
      // Room not found
      res.render('err', { err: 'Room not found', users: (req.session.users === undefined ? "" : req.session.users) });
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Failed to book a room:', error);
    // Redirect to an error page or display an error message
    res.render('err', { err: 'Failed to book a room', users: (req.session.users === undefined ? "" : req.session.users) });
  }
};




const hoteldetails = (req, res) => {
  Hotel.findById(req.params.id)
    .then((result) => {
      res.render("hotelmariot", { objhotel: result, users: req.session.users || null, err: null });
    })
    .catch((err) => {
      console.log(err);
      res.render("hotelmariot", { objhotel: [], users: req.session.users || null, err: err.message });
    });
};







module.exports = {
  gethotel: gethotel,
  gethoteldb:gethoteldb,
  hoteldetails:hoteldetails,
  bookroom:bookroom,
  searchhotel:searchhotel,
 
};