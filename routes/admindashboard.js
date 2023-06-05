const express = require("express");
const router = express.Router();
const hotels = require("../models/hotels");

// GET : /admindashboard
router.get("/", (req, res) => {

    res.render("admindashboard", { users: req.session.users || null });
});

router.get("/admindashboard", (req, res) => {

    res.render("admindashboard", { users: req.session.users || null });
});

// GET : /admin_dashboard
router.get("/admin_dashboard", (req, res) => {

    res.render("admin_dashboard", { users: req.session.users || null });
});

// GET : /admin_addAdmin
router.get("/admin_addAdmin", (req, res) => {

    res.render("admin_addAdmin", { users: req.session.users || null });
});

// GET : /admin_customers
router.get("/admin_customers", (req, res) => {

    res.render("admin_customers", { users: req.session.users || null });
});

// GET : /admin_tours
router.get("/admin_tours", (req, res) => {

    res.render("admin_tours", { users: req.session.users || null });
});

router.get("/admin_cruise", (req, res) => {

    res.render("admin_cruise", { users: req.session.users || null });
});

router.get("/admin_hotel", (req, res) => {
    hotels.find()
        .then(result => {
            res.render("admin_hotel", {hotels:result, users: req.session.users || null  });
        })
        .catch(err => {
            console.log(err)
        })
});

module.exports = router;
