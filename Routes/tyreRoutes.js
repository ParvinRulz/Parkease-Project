const express = require ("express");
const router = express.Router();

const Tyre = require("../Models/TyreTransaction");

router.get("/tyre", (req, res) => {
    res.render("tyreClinic");
});
router.post("/tyreServices", async (req, res) => {
  console.log("reached here");
  try {
    const newTyre = new Tyre(req.body);
    console.log(newTyre);
    await newTyre.save();
    res.redirect("/tyre");
  } catch (error) {
    console.error(error);
    res.render("tyre");
  }
});

module.exports = router;