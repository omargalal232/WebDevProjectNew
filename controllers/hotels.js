const hotel = require("../models/hotels");


const gethotel = (req, res) => {
    hotel.find()
      .then((result) => {
       
        res.render("hotel", { hotel: result, users: req.session.users || null });

      })
      .catch((err) => {
        console.log(err);
      });
  };


  module.exports = {

gethotel:gethotel

  };