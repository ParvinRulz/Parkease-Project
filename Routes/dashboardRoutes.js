const express = require("express");
// const router = express.Router();

const router = express.Router();
// const { isSystemAdmin, isParkingAttendant, isSectionManager } = require("../middleware/auth");

router.get(
  "/adminDashboard",
  /*isSystemAdmin,*/ (req, res) => {
    res.render("adminDashboard");
  },
);

router.get(
  "/attendantDashboard",
  /*isParkingAttendant,*/ (req, res) => {
    res.render("attendantDashboard");
  },
);

router.get(
  "/managerDashboard",
  /*isSectionManager,*/ (req, res) => {
    res.render("managerDashboard");
  },
);

module.exports = router;
