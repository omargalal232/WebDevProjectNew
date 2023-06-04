const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flight");

router.get("/get", (req, res) => {
  res.render("flight", { users: req.session.users || null });
});


router.post("/search",flightController.getflight);
module.exports = router;
