const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("homepage1", { users: req.session.users || null });
});


router.get("/homepage1", (req, res) => {
  res.render("homepage1", { users: req.session.users || null });
});




module.exports = router;




