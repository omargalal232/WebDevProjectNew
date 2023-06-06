const express = require("express");
const router = express.Router();
const city = require('../models/city');
const hotels = require('../models/hotels');

router.post("/add", async (req, res) => {
    const { type, itemId } = req.body;
    const userId = req.session.users._id;

    if (type === "tour") {
        await city.findByIdAndUpdate(itemId, { $addToSet: { usersWithWishlist: userId } });
    } else if (type === "hotel") {
        await hotels.findByIdAndUpdate(itemId, { $addToSet: { usersWithWishlist: userId } });
    }

    res.json({ success: true });
});

module.exports = router;