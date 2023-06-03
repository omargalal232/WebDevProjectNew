const Flight = require('../models/flight');

const getflight = (req, res) => {
    const { searchQuery } = req.query;
    const { price, from, to } = req.body; // Extract search parameters from the request body
  
    if (searchQuery) {
      // Perform a case-insensitive search for flights matching the search query
      Flight.find({
        $or: [
          { from: { $regex: searchQuery, $options: 'i' } },
          { to: { $regex: searchQuery, $options: 'i' } },
        ],
      })
        .then((result) => {
          if (result.length === 0) {
            // No flights found for the search query
            res.render("flight", {
              flights: [],
              users: req.session.users || null,
              searchQuery,
            });
          } else {
            res.render("flight", {
              flights: result,
              users: req.session.users || null,
              searchQuery,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          res.render("flight", {
            flights: [],
            users: req.session.users || null,
            searchQuery,
          });
        });
    } else if (price && from && to) {
      // Search flights based on provided parameters
      Flight.find({ price, from, to })
        .then((result) => {
          if (result.length === 0) {
            // No flights found for the search parameters
            res.render("flight", {
              flights: [],
              users: req.session.users || null,
              searchQuery,
            });
          } else {
            res.render("flight", {
              flights: result,
              users: req.session.users || null,
              searchQuery,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          res.render("flight", {
            flights: [],
            users: req.session.users || null,
            searchQuery,
          });
        });
    } else {
      // No search query or parameters provided, render all flights
      Flight.find()
        .then((result) => {
          res.render("flight", {
            flights: result,
            users: req.session.users || null,
            searchQuery,
          });
        })
        .catch((err) => {
          console.log(err);
          res.render("flight", {
            flights: [],
            users: req.session.users || null,
            searchQuery,
          });
        });
    }
  };

module.exports = {
  getflight
};