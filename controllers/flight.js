const flight = require("../models/flight");

const getflight = (req, res) => {
    flight.find()
      .then((result) => {
        res.render("flight", { flights: result, users: req.session.users || null });
      })
      .catch((err) => {
        console.log(err);
        res.render("flight", { flights: [], users: req.session.users || null });
      });
  };

module.exports = {
  getflight: getflight
};
