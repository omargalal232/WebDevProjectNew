const express = require("express");
const router = express.Router();
const City = require("../models/city");

router.get("/edit/:id", async (req, res) => {
    try {
        const tour = await City.findById(req.params.id);
        res.render("admin_tours_edit", { tour });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

router.post("/edit/:id", async (req, res) => {
    try {
        const updatedTour = {
            name: req.body.tour_name,
            description: req.body.tour_description,
            image: req.body.tour_image
        };
        await City.findByIdAndUpdate(req.params.id, updatedTour);
        res.redirect("/admin_tours");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

router.get("/remove/:id", async (req, res) => {
    try {
        await City.findByIdAndRemove(req.params.id);
        res.redirect("/admin_tours");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

module.exports = router;