const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("homepage1", { users: req.session.users || null });
});

router.get("/homepage1", (req, res) => {
  res.render("homepage1", { users: req.session.users || null });
});

router.get("/Cruise", (req, res, next) => {
  res.render("Cruise", { users: req.session.users || null });
});

router.get("/hotel", (req, res, next) => {
  res.render("hotel", { users: req.session.users || null });
});

router.get("/tours", (req, res, next) => {
  res.render("tours", { users: req.session.users || null });
});

router.get("/flight", (req, res, next) => {
  res.render("flight", { users: req.session.users || null });
});

router.get("/login", (req, res, next) => {
  res.render("login", { users: req.session.users || null });
});

router.get("/signup", (req, res, next) => {
  res.render("signup", { users: req.session.users || null });
});

router.get("/toursdahab", (req, rest) => {
  res.render("toursdahab", { users: req.session.users || null });
});

router.get("/toursluxor", (req, res) => {
  res.render("toursluxor", { users: req.session.users || null });
});

router.get("/tourshurghada", (req, res) => {
  res.render("tourshurghada", { users: req.session.users || null });
});

module.exports = router;




