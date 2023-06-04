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

  const tourdetails = (req, res) => {
    cairo.findById(req.params.id)
      .then((result) => {
        res.render("tourdetails", { objtour: result, users: req.session.users || null });
      })
      .catch((err) => {
        console.log(err);
        res.render("tours", { objtour: [], users: req.session.users || null });
      });
  };

  module.exports = {

getcairo:getcairo,
tourdetails:tourdetails

  };