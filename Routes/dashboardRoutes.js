const express = require("express");
// const router = express.Router();

const router = express.Router();
// const { isSystemAdmin, isParkingAttendant, isSectionManager } = require("../middleware/auth");

const Transaction = require("../Models/Transaction");
const Activity = require("../Models/Activity");
const RecentActivity = require("../Models/RecentActivity");

router.get(
  "/adminDashboard",
  /*isSystemAdmin,*/ (req, res) => {
    res.render("adminDashboard");
  },
);

router.get(
  "/attendantDashboard",
  /*isParkingAttendant,*/ async (req, res) => {
    let activities = await Activities.find().sort({$natural:-1})
    console.log(activities)
    res.render("attendantDashboard", {
      cars: [],
      activities,
      recentactivities
    });
  },
);

router.get(
  "/managerDashboard",
  /*isSectionManager,*/ async (req, res) => {
    let transactions = await Transaction.find().sort({$natural:-1})
    console.log(transactions)
    res.render("managerDashboard", {
      parkingActivities: [],
      services: [],
      pricing: [],
      transactions
  });
  },
);

module.exports = router;
