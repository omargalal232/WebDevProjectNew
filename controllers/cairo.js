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

  const getcairodb = (req,res) => {
    cairo.find()
    .then(result => {
        res.render("admin_tours", { objtour: result, users: req.session.users || null });
    })
    .catch(err => {
        console.log(err)
    })
  }

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


  const bookTickets = async (req, res) => {
    try {
      const numberoftickets = req.body.tickets;
      const parsedTickets = parseInt(numberoftickets);
     
      
  
      const tour = await cairo.findById(req.params.id);
  
      res.render("payment", { objtour: tour, users: req.session.users || null });
      
  
      if (parsedTickets > tour.ticketsavailable) {
        // Handle the case where the requested number of tickets exceeds the available tickets
        res.render("homepage1", { objtour: tour, users: req.session.users || null });
      } else {
        tour.ticketsavailable = tour.ticketsavailable - parsedTickets;
        await tour.save();
      
      }        res.render("payment", { objtour: tour, users: req.session.users || null });
    } catch (error) {
      console.error(error);
  // Redirect to an error page or handle the error appropriately
    }
  };






  module.exports = {

getcairo:getcairo,
tourdetails:tourdetails,
getcairodb:getcairodb,
bookTickets

  };