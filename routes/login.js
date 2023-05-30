const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
var bodyParser = require('body-parser');


router.use(bodyParser.json());
// GET login: /login
router.get("/", (req, res) => {
  res.render("login");
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/homepage1', (req, res) => {
  res.render('homepage1');
});

router.get("/signout", (req, res) => {
  req.session.destroy();
  res.render("homepage1");
});


router.post("/login", users.GetUser); 

module.exports = router;
