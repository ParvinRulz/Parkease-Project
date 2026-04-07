const express = require("express");
const router = express.Router();
const calculateParkingFee = require("../utils/feeCalculator");

router.get("/signout", (req, res) => {
    res.render("signOut");
});










module.exports = router;