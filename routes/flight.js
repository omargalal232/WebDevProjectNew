const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flight");

router.get("/flight", (req, res) => {
  res.render("flight", { users: req.session.users || null });
});

router.get("/get", flightController.getflight);

module.exports = router;
