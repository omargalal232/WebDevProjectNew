const cairo = require("../models/cairotours");


const getcairo = (req, res) => {
    cairo.find()
      .then((result) => {
       
        res.render("cairotours", { cairotours: result, users: req.session.users || null });

      })
      .catch((err) => {
        console.log(err);
        res.render("tours", { cairotours: [], users: req.session.users || null });
      });
  };


  module.exports = {

getcairo:getcairo

  };