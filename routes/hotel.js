const express = require("express");
const router = express.Router();
const hotels = require("../controllers/hotels");



  router.get("/hotel", (req, res) => {
  
    res.render("hotel",{ users: req.session.users || null });

});





router.get("/get", hotels.gethotel);
router.post("/get/search", hotels.searchhotel);

router.get("/get/:id",hotels.hoteldetails); 

router.post("/get/:id/book",hotels.bookroom);

router.get("/hotel/get/:id/book",hotels.hoteldetails); 
router.post('/hotel/get/:id/book',hotels.payment);
module.exports = router;
