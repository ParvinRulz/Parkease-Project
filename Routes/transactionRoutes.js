const express = require("express");

const router = express.Router();

// Import files
const Transaction = require("../Models/Transaction");


router.get("/transaction", (req, res) => {
    //let transactions = await Transaction.find({status:"Parked"}).sort({$natural:-1})
    res.render("transaction");
});

router.post("/add-transaction", async (req, res) => {
  try {
    console.log("req",req)
    const newTransaction = new Transaction(req.body);
    console.log(newTransaction);
    await newTransaction.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.render("transaction");
  }
});

module.exports = router;
