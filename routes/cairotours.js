const express = require("express");
const router = express.Router();
const cairo = require("../controllers/cairo");

  router.get("/cairotours", (req, res) => {
  
    res.render("cairotours",{ users: req.session.users || null });

});

router.get("/get", cairo.getcairo);


router.get("/get/:id",cairo.tourdetails); 

router.post("/get/:id/available",cairo.isavailable); 

// router.get("/get/:id/available",cairo.isavailable); 

module.exports = router;