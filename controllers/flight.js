const flight = require("../models/flight");

const getflight = (req, res) => {
    const { searchQuery } = req.query;
  
    if (searchQuery) {
      // Perform a case-insensitive search for flights matching the search query
      flight.find({ $text: { $search: searchQuery, $caseSensitive: false } })
        .then((result) => {
          if (result.length === 0) {
            // No flights found for the search query
            res.render("flight", { flights: [], users: req.session.users || null, searchQuery });
          } else {
            res.render("flight", { flights: result, users: req.session.users || null, searchQuery });
          }
        })
        .catch((err) => {
          console.log(err);
          res.render("flight", { flights: [], users: req.session.users || null, searchQuery });
        });
    } else {
      // No search query provided, render all flights
      flight.find()
        .then((result) => {
          res.render("flight", { flights: result, users: req.session.users || null, searchQuery });
        })
        .catch((err) => {
          console.log(err);
          res.render("flight", { flights: [], users: req.session.users || null, searchQuery });
        });
    }
  };
module.exports = {
  getflight: getflight
};
