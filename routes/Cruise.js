const express = require("express");
const router = express.Router();
const Cruise = require("../controllers/cruise");

  router.get("/Cruise", (req, res) => {
  
    res.render("Cruise",{ users: req.session.users || null });

});

router.get("/get", Cruise.getcruise);


module.exports = router;

