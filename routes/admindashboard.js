const express = require("express");
const router = express.Router();
const hotels = require("../models/hotels");
const city = require("../models/cairotours");
const City = require ("../controllers/cairo");
const Hotel = require ("../controllers/hotels");
const admin = require ("../controllers/admin");
const { Admin } = require("mongodb");




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

//     res.render("admindashboard", { users: req.session.users  null });
// });

// router.get("/admindashboard", (req, res) => {

//     res.render("admindashboard", { users: req.session.users  null });
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

 

  
// GET : /admin_tours
router.get("/admin_tours",City.getcairodb); 
router.post("/admin_tours/add",admin.Addcitydb);
router.get("/admin_tours/add",admin.Addcitydb); 



// GET : /admin_hotel
router.get("/admin_hotel", Hotel.gethoteldb) ;
router.post("/admin_hotel",admin.Addhotels); 
router.get("/admin_hotel",admin.Addhotels); 


// modefiy the crusie routers
router.get("/admin_cruise", (req, res) => {
 res.render("admin_cruise", { users: req.session.users || null });
});

// modefiy the hotels routers
router.get("/edit/hotel/:id", admin.getedithoteld);
router.post("/edit/hotel/:id", admin.edithotel);
router.get("/remove/hotel/:id", admin.deletehotel);


// modefiy the tours routers

router.get("/edit/tour/:id", admin.geteditdata);
router.post("/remove/tour/:id", admin.deletedata);
router.post("/edit/tour/:id", admin.editdata);



// modefiy the customer routers
router.get("/admin_customers",admin.getuserdb);
router.post("/admin_customers",admin.AddUser); 
router.get("/admin_customers",admin.AddUser);
router.post("/delete/:id", admin.deleteuser);




module.exports = router;