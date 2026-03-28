const express = require ("express");
const router = express.Router();

router.get("/admin", (req, res) => {
    res.render("adminReports");
});

router.get("/attendant", (req, res) => {
    res.render("attendantDashboard");
});

module.exports = router;