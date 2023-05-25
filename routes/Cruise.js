const express = require("express");
const router = express.Router();


// GET Cruises: /
router.get("/", (req, res, next) => {
    res.send("Cruise");
});

// GET homepage1: /
router.get('/homepage1', (req, res, next) => {
    res.render('homepage1');
  });

// GET : /hotel
router.get("/hotel", (req, res, next) => {
    res.render("hotel");
});

// GET : /tours
router.get("/tours", (req, res, next) => {
    res.render("tours");
});



// GET : /flight
router.get("/flight", (req, res, next) => {
    res.render("flight");
});

// GET Cruises: /details
router.get("/Cruise1", (req, res, next) => {
    res.send("Cruise1");
});


module.exports = router;
