const express = require("express");
const router = express.Router();
const multer = require("multer");
const { isSectionManager } = require("../middleware/auth");

// Import files
const Battery = require("../Models/BatteryRegistration");

//Image upload configurations
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
let upload = multer({ storage: storage });

router.get("/battery", (req, res) => {
  res.render("battery");
});

router.post(
  "/registerBattery",
  upload.single("batteryImage"),
  async (req, res) => {
    try {
      const newBattery = new Battery(req.body);
      newBattery.batteryImage = req.file.path;
      console.log(newBattery);
      await newBattery.save();
      res.redirect("/");
    } catch (error) {
      console.error(error);
      res.render("battery");
    }
  },
);

module.exports = router;
