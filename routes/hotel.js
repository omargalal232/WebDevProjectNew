const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("hotel", { users: req.session.users || null });
});

router.get("/hotel", (req, res) => {
    res.render("hotel", { users: req.session.users || null });
});

router.get("/hotelReserve", (req, res) => {
    res.render('hotelReserve', { users: req.session.users || null });
});

router.get("/homepage1", (req, res) => {
    res.render("homepage1", { users: req.session.users || "" });
});

module.exports = router;