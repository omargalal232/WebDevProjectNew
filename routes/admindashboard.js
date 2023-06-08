const express = require("express");
const router = express.Router();
const hotels = require("../models/hotels");
const city = require("../models/cairotours");
const City = require("../controllers/cairo");
const Hotel = require("../controllers/hotels");
const admin = require("../controllers/admin");
const { Admin } = require("mongodb");





router.use("/admin_dashboard", (req, res, next) => {
    if (req.session.users !== undefined && req.session.users.UserName === 'admin') {
        next();
    }
    else {
        res.render('err', { err: 'You are not an Admin', users: (req.session.users === undefined ? "" : req.session.users) })
    }
});

router.get("/wishlist", async (req, res) => {
  const userId = req.session.id;

  const tours = await city.find({ usersWithWishlist: userId });
  const Hotels = await hotels.find({ usersWithWishlist: userId });

  res.render("wishlist", { users: req.session.users || null, tours, Hotels });
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


// POST: /admin_hotel/add
router.post("/admin_hotel/add", (req, res) => {
    const { hotel_name, hotel_description, hotel_price, hotel_image1, hotel_image2, hotel_image3 } = req.body;

    // Create a new hotel object using the data from the form
    const newHotel = new hotels({
        name: hotel_name,
        description: hotel_description,
        price: hotel_price,
        image1: hotel_image1,
        image2: hotel_image2,
        image3: hotel_image3
    });

    // Save the new hotel to the database
    newHotel.save()
        .then(() => {
            res.redirect("/admin_hotel"); // Redirect to the hotels page after successful addition
        })
        .catch((error) => {
            console.log(error);
            res.redirect("/admin_hotel"); // Redirect to the hotels page if there's an error
        });
});


// GET : /admin_tours
router.get("/admin_tours", City.getcairodb);
router.post("/admin_tours/add", admin.Addcitydb);
router.get("/admin_tours/add", admin.Addcitydb);



// GET : /admin_hotel
router.get("/admin_hotel", Hotel.gethoteldb);
router.post("/admin_hotel", admin.Addhotels);
router.get("/admin_hotel", admin.Addhotels);


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
router.get("/admin_customers", admin.getuserdb);
router.post("/admin_customers", admin.AddUser);
router.get("/admin_customers", admin.AddUser);
router.post("/delete/:id", admin.deleteuser);





router.get("/admin_homepage", admin.gethomepage);
router.post("/admin_homepage", admin.addhomepage);
router.get("/admin_homepage", admin.addhomepage);
router.post("/admin_homepage/delete/:id", admin.deletecity);

module.exports = router;