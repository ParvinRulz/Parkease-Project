const express = require ("express");
const router = express.Router();

router.get("/battery", (req, res) => {
    res.render("battery");
});

module.exports = router;