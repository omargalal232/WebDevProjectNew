const hotel = require("../models/hotels");

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
  hoteldetails:hoteldetails
};
