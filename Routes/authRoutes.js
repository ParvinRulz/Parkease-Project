const express = require("express");
const router = express.Router();
const passport = require("passport");

// Import files
const Registration = require("../Models/Registration");

router.get("/signup", (req, res) => {
    res.render("signUp");
});

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const newUser = new Registration(req.body);
    await Registration.register(newUser, (req.body.password));
    console.log("user save")
    res.redirect("/login");
  } catch (error) {
    console.error(error) 
    res.send("Not able to save the user to the database")
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", passport.authenticate("local", {
  failureRedirect:"/login"
}), async(req, res)=>{
  req.session.user=req.user
  if( req.user.role=="Parking Attendant"){
    res.redirect("/attendantdashboard")
  }
  if( req.user.role=="System Admin"){
    res.redirect("/admindashboard")
  }
  if( req.user.role=="Section Manager"){
    res.redirect("/managerdashboard")
  }
})

module.exports = router;