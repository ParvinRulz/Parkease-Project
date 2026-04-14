const express = require ("express");
// const router = express.Router();

const router = express.Router();
const { isAdmin, isAttendant, isManager } = require("../middleware/auth");

router.get("/adminDashboard", isAdmin, (req, res) => {
    res.render("adminReports");
});

router.get("/attendantDashboard", isAttendant, (req, res) => {
    res.render("attendantDashboard");
});

router.get("/managerDashboard", isManager, (req, res) => {
  res.render("manager-dashboard");
});

module.exports = router;