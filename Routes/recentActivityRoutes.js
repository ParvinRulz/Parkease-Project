const express = require("express");
const router = express.Router();

// Import model files
const RecentActivity = require("../Models/RecentActivity");

router.get("/recentActivity", (req, res) => {
  //let recentActivity = await RecentActivity.find({status:"Parked"}).sort({$natural:-1})
  res.render("recentActivity");
});

router.post("/add-recentActivity", async (req, res) => {
  try {
    console.log("req", req);
    const newRecentActivity = new RecentActivity(req.body);
    console.log(newRecentActivity);
    await newRecentActivity.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.render("recentActivity");
  }
});

module.exports = router;
