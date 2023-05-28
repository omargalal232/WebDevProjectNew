const express = require("express");
var bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const users = require("../controllers/users");


// GET signup: /signup
router.get("/", (req, res) => {
  res.render("login" , { users: (req.session.users === undefined ? "" : req.session.users) });
});

router.get('/login', (req, res ) => {
    res.render('login', { users: (req.session.users === undefined ? "" : req.session.users) });
});
router.get('/homepage1', (req, res ) => {
    res.render('homepage1', { users: (req.session.users === undefined ? "" : req.session.users) });
});



router.post("/login/homepage1", users.GetUser);

module.exports = router;