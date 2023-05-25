const express = require("express");
const router = express.Router();

// GET tours: /
router.get("/", (req, res, next) => {
    res.send("tours");
});

// GET homepage: /
router.get("/homepage1", (req, res, next) => {
    res.send("homepage1");
});

// GET hotels: /hotel
router.get("/hotel", (req, res, next) => {
    res.send("hotel");
});

// GET tours: /tours
router.get("/tours", (req, res, next) => {
    res.send("tours");
});

// GET cruise: /cruise
router.get("/Cruise", (req, res, next) => {
    res.send("cruise");
});

// GET flight: /flight
router.get("/flight", (req, res, next) => {
    res.send("flight");
});



module.exports = router;
