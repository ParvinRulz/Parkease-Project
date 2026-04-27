const express = require("express");
const router = express.Router();
const multer = require('multer');
const { isSystemAdmin, isParkingAttendant, isSectionManager } = require("../middleware/auth");

const Transaction = require("../Models/Transaction");
const Activity = require("../Models/Activity");
const RecentActivity = require("../Models/RecentActivity");
const Oversight = require("../Models/Oversight");
const RecentOversight = require("../Models/RecentOversight");
const Registration = require("../Models/Registration");

router.get("/adminDashboard", isSystemAdmin, async (req, res) => {
  let oversight = await Oversight.find().sort({ $natural: -1 });
  const recentOversight = await RecentOversight.find().sort({ $natural: -1 });
  console.log(oversight);
  console.log(recentOversight);
  res.render("adminDashboard", {
    users: [],
    oversight,
    recentOversight,
  });
});

router.get("/attendantDashboard", isParkingAttendant, async (req, res) => {
  let activity = await Activity.find().sort({ $natural: -1 });
  const recentActivity = await RecentActivity.find().sort({ $natural: -1 });
  console.log(activity);
  console.log(recentActivity);
  res.render("attendantDashboard", {
    cars: [],
    activity,
    recentActivity,
  });
});

router.get("/managerDashboard", isSectionManager, async (req, res) => {
  let transactions = await Transaction.find().sort({ $natural: -1 });
  console.log(transactions);
  res.render("managerDashboard", {
    parkingActivities: [],
    services: [],
    pricing: [],
    transactions,
  });
});

module.exports = router;
