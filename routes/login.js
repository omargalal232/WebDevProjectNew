const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.render("login", { users: req.session.users || null });
});

router.get("/login", (req, res) => {
  res.render("login", { users: req.session.users || null });
});



router.get('/homepage1', (req, res) => {
  res.render('homepage1', { users: req.session.users || "" });
});

router.get("/signout", (req, res) => {
  req.session.destroy();
  res.render("homepage1", { users: "" });
});

router.get('/signout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

router.post("/login", (req, res, next) => {
  users.GetUser(req, res, next);
}, (req, res) => {
  const { UserName } = req.session.users;
  req.session.username = UserName;
  res.redirect("homepage1");
});



module.exports = router;
