const express = require("express");
var bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.json());

const users = require("../controllers/users");


// GET signup: /signup
router.get("/", (req, res) => {
  res.render("signup" , { users: (req.session.users === undefined ? "" : req.session.users) });
});

router.get('/signup', (req, res ) => {
    res.render('signup', { users: (req.session.users === undefined ? "" : req.session.users) });
});


router.post('/signup', users.AddUser);

module.exports = router;