const express = require("express");
const router = express.Router();

// Import model files
const RecentOversight = require("../Models/RecentOversight");


router.get("/recentOversight", (req, res) => {
    //let recentOversight = await RecentOversight.find({status:"Parked"}).sort({$natural:-1})
    res.render("recentOversight");
});

router.post("/add-recentOversight", async (req, res) => {
  try {
    console.log("req",req)
    const newRecentOversight = new RecentOversight(req.body);
    console.log(newRecentOversight);
    await newRecentOversight.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.render("recentOversight");
  }
});

module.exports = router;
