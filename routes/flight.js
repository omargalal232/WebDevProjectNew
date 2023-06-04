


const express = require("express");
const router = express.Router();
const Flight = require("../controllers/flight");

  router.get("/flight", (req, res) => {
  
    res.render("flight",{ users: req.session.users || null });

});












router.post("/get", Flight.getflight);
router.get("/get",Flight.flightdetailes);
router.get("/get/:id",Flight.flightdetailes); 
module.exports = router;