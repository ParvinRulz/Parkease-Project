const express = require ("express");
const router = express.Router();

router.get("/receipt", (req, res) => {
    res.render("signOut");
});

module.exports = router;