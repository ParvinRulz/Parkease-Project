const express = require("express");
const router = express.Router();

// Import files
const Oversight = require("../Models/Oversight");

router.get("/oversight", (req, res) => {
  res.render("oversight");
});

router.post("/add-oversight", async (req, res) => {
  try {
    console.log("req", req);
    const newOversight = new Oversight(req.body);
    console.log(newOversight);
    await newOversight.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.render("oversight");
  }
});

module.exports = router;
