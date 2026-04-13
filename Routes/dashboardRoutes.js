const express = require ("express");
// const router = express.Router();

const router = express.Router();
const Registration = require("../models/Registration");
const Vehicle = require("../models/VehicleRegistration");
const Battery = require("../models/BatteryRegistration");
const Signout = require("../models/SignOut");
const TyreTransaction = require("../models/TireTransaction");
const BatteryTranction = require("../models/BatteryTransaction");
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