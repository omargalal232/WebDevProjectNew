const express = require("express");
const router = express.Router();
const hotels = require("../controllers/hotels");

  router.get("/hotel", (req, res) => {
  
    res.render("hotel",{ users: req.session.users || null });

});












router.get("/get", hotels.gethotel);


router.get("/get/:id",hotels.hoteldetails); 
module.exports = router;