const express = require("express");

const router = express.Router();

// Import files
const Transaction = require("../Models/Activity");


router.get("/activity", (req, res) => {
    res.render("activity");
});

router.post("/add-activity", async (req, res) => {
  try {
    console.log("req",req)
    const newActivity = new Activity(req.body);
    console.log(newActivity);
    await newActivity.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.render("activity");
  }
});

module.exports = router;
