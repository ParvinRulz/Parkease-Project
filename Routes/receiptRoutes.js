const express = require ("express");
const router = express.Router();

//Import files
const SignOut = require("../Models/SignOut");

router.get("/receipt", (req, res) => {
    res.render("receipt");
});

module.exports = router;