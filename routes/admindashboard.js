const express = require("express");
const router = express.Router();

// GET : /admindashboard
router.get("/", (req, res, next) => {
    res.render("admindashboard");
});

module.exports = router;