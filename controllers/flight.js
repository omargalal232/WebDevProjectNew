const flight = require("../models/flight");

const getflight = (req, res) => {
  flight.find()
    .then((result) => {
      res.render("flight", { flight: result, users: req.session.users || null });
    })
    .catch((err) => {
      console.log(err);
      res.render("flight", { flight: [], users: req.session.users || null });
    });
};

module.exports = {
  getflight: getflight
};
