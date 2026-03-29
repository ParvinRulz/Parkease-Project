const express = require("express");
const router = express.Router();

router.get("/vehicle", (req, res) => {
  res.render("vehicleRegistration");
});

module.exports = router;
