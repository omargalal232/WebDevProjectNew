const cairo = require("../models/cairotours");


const getcairo = (req, res) => {
    cairo.find()
      .then((result) => {
       
        res.render("cairotours", { cities: result, users: req.session.users|| null });
      })
      .catch((err) => {
        console.log(err);
        res.render("tours", { cities: [], users: req.session.users || null });
      });
  };


  module.exports = {

getcairo:getcairo

  };