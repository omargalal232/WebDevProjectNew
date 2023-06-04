const city = require("../models/city");
const cairo = require("../models/cairotours");
const bcrypt= require ("bcryptjs");

const Addcity = (req, res) => {
    const city = new city({
        name: req.body.name,
        description: req.body.description,
        
      });
    
      city
      .save()
      .then((result) => {
        res.render("tours");
      })
      .catch((err) => {
        console.log(err);
        res.render("tours");
      });
  };

  const getcity = (req, res) => {
    city.find()
      .then((result) => {
        console.log("Database is retrieved");
       
        res.render("tours", { cities: result, users: req.session.users|| null });
      })
      .catch((err) => {
        console.log(err);
        res.render("tours", { cities: [], users: req.session.users || null });
      });
  };


  // const getcairo = (req, res) => {
  //   cairo.find()
  //     .then((result) => {
       
  //       res.render("cairotours", { cities: result, users: req.session.users|| null });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.render("tours", { cities: [], users: req.session.users || null });
  //     });
  // };


  module.exports = {
    Addcity:Addcity,
getcity:getcity,
// getcairo:getcairo
  };
    
  
