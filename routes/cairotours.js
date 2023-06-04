const express = require("express");
const router = express.Router();
const cairo = require("../controllers/cairo");

  router.get("/cairotours", (req, res) => {
  
    res.render("cairotours",{ users: req.session.users || null });

});

router.get("/get", cairo.getcairo);


router.get("/get/:id",cairo.tourdetails); 
module.exports = router;