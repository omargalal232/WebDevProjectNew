const express = require("express");
const router = express.Router();

// GET homepage1: /
router.get("/", (req, res, next) => {
  res.render("homepage1");
});

//app.get('/homepage1', function(req, res, next) {
  // Render the homepage1.ejs 
  //res.render('homepage1');
//});


// GET homepage1: /Cruise
router.get("/Cruise", (req, res , next) => {
  res.render("Cruise");
});



// GET homepage1: /hotel
router.get("/hotel", (req, res, next) => {
  res.render("hotel");
});

// GET : /tours
router.get("/tours", (req, res, next) => {
  res.render("tours");
});

// GET homepage1: /flight
router.get("/flight", (req, res, next) => {
  res.render("flight");
});

// GET homepage1: /login
router.get("/login", (req, res, next) => {
  res.render("login");
});

// GET homepage1: /signup
router.get("/signup", (req, res, next) => {
  res.render("signup");
});



module.exports = router;



