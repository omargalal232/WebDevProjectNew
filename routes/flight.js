const express = require("express");
const router = express.Router();
const flight = require("../controllers/flight");

router.get("/flight", (req, res) => {
    res.render("flight", { users: req.session.users || null });
  });

router.get("/flight/search", flight.getflight);


module.exports = router;