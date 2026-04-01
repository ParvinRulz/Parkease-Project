const express = require ("express");
const router = express.Router();

const Tyre = require("../models/TyreTransactions");

router.get("/tyre", (req, res) => {
    res.render("tyre");
});
router.post("/tyreServices", async (req, res) => {
  console.log("reached here");
  try {
    const newTyre = new Tire(req.body);
    console.log(newTyre);
    await newTyre.save();
    res.redirect("/tyreServices");
  } catch (error) {
    console.error(error);
    res.render("tyre");
  }
});

module.exports = router;