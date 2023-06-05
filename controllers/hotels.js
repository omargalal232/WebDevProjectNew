const hotel = require("../models/hotels");
const Room = require("../models/room");
const gethotel = (req, res) => {
  hotel.find()
    .then((result) => {
      res.render("hotel", { hotels: result, users: req.session.users || null });
    })
    .catch((err) => {
      console.log(err);
      res.render("hotel", { hotels: [], users: req.session.users || null });
    });
};

const gethoteldb = (req,res) => {
  hotel.find()
  .then(result => {
      res.render("admin_hotel", { hotels: result, users: req.session.users || null });
  })
  .catch(err => {
      console.log(err)
  })
}




    
// Define a route handler for the form submission
const bookroom= async (req, res) => {
  const hotelId = req.params.id;
  const { checkinDate, checkoutDate } = req.body;

  try {
    // Fetch the hotel by ID
    const hotell = await hotels.findById(hotelId);

    // Find the available rooms for the selected dates
    const availableRooms = await Room.find({
      hotell: hotelId,
      $or: [
        { startDate: { $gt: new Date(checkoutDate) } },
        { endDate: { $lt: new Date(checkinDate) } }
      ]
    });

    if (availableRooms.length > 0) {
      // At least one room is available
      const selectedRoom = availableRooms[0]; // You can choose the first available room here

      // Create a new booking
      const booking = new Booking({
        room: selectedRoom._id,
        guestName: 'John Doe', // Replace with the actual guest name
        startDate: new Date(checkinDate),
        endDate: new Date(checkoutDate)
      });

      // Save the booking
      await booking.save();

      // Redirect to a success page or display a success message
      console.log("booked");
    } else {
      // No rooms available for the selected dates
      // Redirect to an error page or display an error message
   console.log("no rooms");
    }
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Failed to book a room:', error);
    // Redirect to an error page or display an error message
    res.render('404');
  }
};



 




const hoteldetails = (req, res) => {
  hotel.findById(req.params.id)
    .then((result) => {
      res.render("hotelmariot", { objhotel: result, users: req.session.users || null });
    })
    .catch((err) => {
      console.log(err);
      res.render("hotel", { objhotel: [], users: req.session.users || null });
    });
};


module.exports = {
  gethotel: gethotel,
  gethoteldb:gethoteldb,
  hoteldetails:hoteldetails,
  bookroom:bookroom
};
