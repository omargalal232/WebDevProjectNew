const Flight = require('../models/flight');
const getflight = (req, res, next) => {
  const { from, to, price } = req.body;

  Flight.find({ from, to, price })
    .then((result) => {
      res.render("flight", {
        objflight: result,
        users: req.session.users || null,
      });
    })
    .catch((err) => {
      console.log(err);
      res.render("flight", {
        objflight: [],
        users: req.session.users || null,
        errorMessage: "An error occurred. Please try again.",
      });
    });
};




const flightdetailes = (req, res) => {
  Flight.findById(req.params.id)
    .then((result) => {
      res.render("flight", { objflight: result, users: req.session.users || null });
    })
    .catch((err) => {
      console.log(err);
      res.render("flight", { objflight: [], users: req.session.users || null });
    });
};

module.exports = {
  getflight:getflight,
  flightdetailes:flightdetailes
};