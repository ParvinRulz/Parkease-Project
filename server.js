//1.Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const passport = require("passport");
require("dotenv").config();
const Registration = require('./Models/Registration');
console.log(Registration);
//Import routes
const indexRoutes = require("./Routes/indexRoutes");
const authRoutes = require("./Routes/authRoutes");
const dashboardRoutes = require("./Routes/dashboardRoutes");
const receiptRoutes = require("./Routes/receiptRoutes");
const batteryRoutes = require("./Routes/batteryRoutes");
const tyreRoutes = require("./Routes/tyreRoutes");
const signoutRoutes = require("./Routes/signoutRoutes");

//2.Instantiations
const app = express();
const PORT = 3000;

//3.Configurations
//mongodb settings
//setting up database connections
mongoose.connect(process.env.DATABASE);
mongoose.connection
  .once("open", () => {
    console.log("Mongoose connnection open");
  })
  .on("error", (err) => {
    console.error(`connection error: ${err.message}`);
  });

//Set view engine to pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //specifies the views directory

//4. Middleware

// To parse URL encoded data
app.use(express.urlencoded({ extended: false })); //This helpse to parse data from forms.
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

/* PASSPORT LOCAL AUTHENTICATION */

passport.use(Registration.createStrategy());

passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

//Global variable to make the loggged in user available to all pug templates.
//Passport automatically attaches the logged in user to req.user
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

//5. Routes
//Using imported routes
app.use("/", indexRoutes);
app.use("/", authRoutes);
app.use("/", dashboardRoutes);
app.use("/", receiptRoutes);
app.use("/", batteryRoutes);
app.use("/", tyreRoutes);
app.use("/", signoutRoutes);
//Non existant routes regardless of the method used(get, post, delete) will be caught by this middleware

// This will always be the last endpoint in this file
app.use((req, res) => {
  res.status(404).send("Oops! Route not found.");
});

//6.Bootstrapping server
// This should always be the last line in this file
app.listen(PORT, () => console.log(`listening on port ${PORT}`)); // new
