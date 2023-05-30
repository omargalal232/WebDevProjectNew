const express = require("express");
const router = express.Router();
const cruise = require("../controllers/cruise");


// GET Cruises: /
router.get("/", (req, res, next) => {
    res.render("Cruise");
});


// GET Cruises: 
router.get("/Cruise", (req, res, next) => {
    res.render("Cruise");
});

// GET Cruises: details
router.get("/Cruise1", (req, res, next) => {
    res.render("Cruise1");
});

// POST Add Cruise: /addcruise
router.post("/Cruise", cruise.AddCruise);

module.exports = router;
