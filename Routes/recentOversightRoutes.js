const express = require("express");
const router = express.Router();
const multer = require('multer');

// Import model files
const RecentOversight = require("../Models/RecentOversight");

//Image upload configurations
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
})
let upload = multer({ storage: storage })



router.get("/recentOversight", (req, res) => {
    //let recentOversight = await RecentOversight.find({status:"Parked"}).sort({$natural:-1})
    res.render("recentOversight");
});

router.post("/add-recentOversight", async (req, res) => {
  try {
    console.log("req",req)
    const newRecentOversight = new RecentOversight(req.body);
    console.log(req.body);
    await newRecentOversight.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.render("recentOversight");
  }
});

module.exports = router;
