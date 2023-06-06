const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("homepage1", { users: req.session.users || null });
});


router.get("/homepage1", (req, res) => {
  res.render("homepage1", { users: req.session.users || null });
});

router.get("/wishlist", async (req, res) => {
  const userId = req.session.users._id;

  const tours = await city.find({ usersWithWishlist: userId });
  const hotels = await hotels.find({ usersWithWishlist: userId });

  res.render("wishlist", { users: req.session.users || null, tours, hotels });
});
module.exports = router;




