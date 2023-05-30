const express = require("express");
const router = express.Router();

// GET : /admindashboard
router.get("/", (req, res, next) => {
    res.render("admindashboard");
});

// GET : /admin_addAdmin
router.get("/", (req, res, next) => {
    res.render("admin_addAdmin");
});

// GET : /admin_customers
router.get("/", (req, res, next) => {
    res.render("admin_customers");
});

// GET : /admin_dashboard
router.get("/", (req, res, next) => {
    res.render("admin_dashboard");
});

// GET : /admin_reports
router.get("/", (req, res, next) => {
    res.render("admin_reports");
});

// GET : /admin_tours
router.get("/", (req, res, next) => {
    res.render("admin_tours");
});

module.exports = router;