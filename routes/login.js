const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

// GET login: /login
router.get("/", (req, res) => {
  res.render("login", { users: (req.session.users === undefined ? "" : req.session.users) });
});

router.get('/login', (req, res ) => {
  res.render('login', { users: (req.session.users === undefined ? "" : req.session.users) });
});

router.get('/homepage1', (req, res ) => {
  res.render('homepage1', { users: (req.session.users === undefined ? "" : req.session.users) });
});

router.post("/login", users.GetUser);

module.exports = router;
