const express = require("express");
const router = express.Router();
const city = require("../controllers/cities");

const cities = require("../models/cities");
// GET tours: /
// router.get("/", (req, res, next) => {
//     res.render("tours");
// });



router.get("/",city.createdoc);
// GET tours: 
router.get("/", (req, res, next) => {

    res.render("tours");
});




router.post("/",function(req, res) {



    var city = [{ name: 'Mongoose Tl', description:'hi' },
    {name: 'suez', description:'hi' }
   ];
  
   cities.insertMany(city, function(err, result) {

    city.save
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
  
  
  
  });







// POST Add Cruise: /addcruise
router.post("/tours", city.Addcity);

module.exports = router;