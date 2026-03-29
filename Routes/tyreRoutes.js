const express = require ("express");
const router = express.Router();

router.get("/tyre", (req, res) => {
    res.render("tyre");
});

module.exports = router;