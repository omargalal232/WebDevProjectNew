const express = require("express");
const router = express.Router();
const hotels = require("../models/hotels");
const city = require("../models/city");



router.use("/admin_dashboard" , (req, res, next) => {
    if (req.session.users !== undefined && req.session.users.UserName === 'admin') {
        next();
    }
    else {
        res.render('err', { err: 'You are not an Admin',users: (req.session.users === undefined ? "" : req.session.users) })
    }
  });


// GET : /admindashboard
// router.get("/", (req, res) => {

//     res.render("admindashboard", { users: req.session.users || null });
// });

// router.get("/admindashboard", (req, res) => {

//     res.render("admindashboard", { users: req.session.users || null });
// });

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
    city.find()
        .then(result => {
            res.render("admin_tours", { cities: result, users: req.session.users || null });
        })
        .catch(err => {
            console.log(err)
        })
});


router.get("/admin_cruise", (req, res) => {

    res.render("admin_cruise", { users: req.session.users || null });
});

router.get("/admin_hotel", (req, res) => {
    hotels.find()
        .then(result => {
            res.render("admin_hotel", { hotels: result, users: req.session.users || null });
        })
        .catch(err => {
            console.log(err)
        })
});






module.exports = router;
