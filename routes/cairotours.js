const express = require("express");
const router = express.Router();
const cairo = require("../controllers/cairo");

  router.get("/cairotours", (req, res) => {
  
    res.render("cairotours",{ users: req.session.users || null });

});



router.get("/cairotours", (req, res) => {
  res.render("cairotours");

});



router.get("/get", cairo.getcairo);


module.exports = router;