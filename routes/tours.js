const express = require("express");
const router = express.Router();
const cities = require("../controllers/cities");

  router.get("/tours", (req, res) => {
  
    res.render("tours", { users: req.session.users || null });
});





//router.get("/", cities.Addcity);
router.get("/get", cities.getcity);




module.exports = router;




