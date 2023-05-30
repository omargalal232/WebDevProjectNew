const express = require("express");
const router = express.Router();

// GET : /admindashboard
router.get("/", (req, res, next) => {
    res.render("admindashboard");
});

// GET : /admin_addAdmin
router.get("/admin_addAdmin", (req, res, next) => {
    res.render("admin_addAdmin");
});

// GET : /admin_customers
router.get("/admin_customers", (req, res, next) => {
    res.render("admin_customers");
});

// GET : /admin_dashboard
router.get("/admin_dashboard", (req, res, next) => {
    res.render("admin_dashboard");
});

// GET : /admin_reports
router.get("/admin_reports", (req, res, next) => {
    res.render("admin_reports");
});

// GET : /admin_tours
router.get("/admin_tours", (req, res, next) => {
    res.render("admin_tours");
});

module.exports = router;