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

router.get("/homepage1", (req, res) => {
    res.render("homepage1", { users: req.session.users || "" });
});

module.exports = router;