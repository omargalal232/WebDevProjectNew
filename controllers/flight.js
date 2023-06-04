const Flight = require('../models/flight');

const getflight = (req, res, next) => {
  const { from, to,price } = req.body;

  Flight.findOne({ from:from, to:to,price:price })
     .then(result => {
    console.log(result);

     })
     .catch(err => {
        console.log(err);
        res.render("flight", { errorMessage: "An error occurred. Please try again." });
     });
};

module.exports = {
  getflight:getflight
};