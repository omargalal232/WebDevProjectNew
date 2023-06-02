const express = require("express");
const router = express.Router();
const cruise = require("../controllers/cruise");

router.get("/", (req, res, next) => {
  
    res.render("Cruise", { users: req.session.users || null });
});



router.get("/Cruise1", (req, res, next) => {
    res.render("Cruise1", { users: req.session.users || null });
});

router.post("/Cruise", cruise.AddCruise);

module.exports = router;

