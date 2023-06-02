const express = require("express");
const router = express.Router();
const cities = require("../controllers/cities");

  router.get("/tours", (req, res) => {
  
    res.render("tours", { users: req.session.users || null });
});





//router.get("/", cities.Addcity);
router.get("/get", cities.getcity);


module.exports = router;

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
