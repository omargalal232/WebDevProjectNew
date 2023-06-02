const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("hotel", { users: req.session.users || null });
});

router.get("/hotel", (req, res) => {
    res.render("hotel", { users: req.session.users || null });
});

router.get("/hoteltitanic", (req, res) => {
    res.render('hoteltitanic', { users: req.session.users || null });
});

router.get("/hotelhilton", (req, res) => {
    res.render('hotelhilton', { users: req.session.users || null });
});

router.get("/hotelmariot", (req, res) => {
    res.render('hotelmariot', { users: req.session.users || null });
});

router.get("/hotelShtigenBerger", (req, res) => {
    res.render('hotelShtigenBerger', { users: req.session.users || null });
});

router.get("/hotelmakadibay", (req, res) => {
    res.render('hotelmakadibay', { users: req.session.users || null });
});

router.get("/hotelkempinski", (req, res) => {
    res.render('hotelkempinski', { users: req.session.users || null });
});

router.get("/homepage1", (req, res) => {
    res.render("homepage1", { users: req.session.users || "" });
});

module.exports = router;