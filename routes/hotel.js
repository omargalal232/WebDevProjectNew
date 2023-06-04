const express = require("express");
const router = express.Router();
const hotels = require("../controllers/hotels");

  router.get("/hotel", (req, res) => {
  
    res.render("hotel",{ users: req.session.users || null });

});



router.get("/hotel", (req, res) => {
  res.render("hotel");

});



router.get("/hotelhilton", (req, res) => {
  res.render("hotelhilton");

});


router.get("/hotelmariot", (req, res) => {
  res.render("hotelmariot");

});


router.get("/get", hotels.gethotel);


module.exports = router;