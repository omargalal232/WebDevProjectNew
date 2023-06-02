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

  router.get("/tourscairo", (req, res) => {
    res.render("tourscairo", { users: req.session.users || null });
});

router.get("/toursalex", (req, res) => {
  res.render("toursalex", { users: req.session.users || null });
});

router.get("/toursainelsokhna", (req, res) => {
  res.render("toursainelsokhna", { users: req.session.users || null });
});

router.get("/toursdahab", (req, res) => {
  res.render("toursdahab", { users: req.session.users || null });
});

router.get("/tourselgouna", (req, res) => {
  res.render("tourselgouna", { users: req.session.users || null });
});

router.get("/tourshurghada", (req, res) => {
  res.render("tourshurghada", { users: req.session.users || null });
});

router.get("/toursluxor", (req, res) => {
  res.render("toursluxor", { users: req.session.users || null });
});

router.get("/tourssharm", (req, res) => {
  res.render("tourssharm", { users: req.session.users || null });
});






// POST Add Cruise: /addcruise
router.post("/tours", city.Addcity);

module.exports = router;