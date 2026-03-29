//1.Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

//Import routes
const indexRoutes = require("./Routes/indexRoutes");
const authRoutes = require("./Routes/authRoutes");
const dashboardRoutes = require("./Routes/dashboardRoutes");
const registrationRoutes = require("./Routes/registrationRoutes");
const receiptRoutes = require("./Routes/receiptRoutes");
const batteryRoutes = require("./Routes/batteryRoutes");
const tyreRoutes = require("./Routes/tyreRoutes");

//2.Instantiations
const app = express();
const PORT = 3000;

//3. Configurations
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

//5. Routes
//Using imported routes
app.use("/", indexRoutes);
app.use("/auth", authRoutes);
app.use("./", dashboardRoutes);
app.use("./", registrationRoutes);
app.use("./", receiptRoutes);
app.use("/", batteryRoutes);
app.use("./", tyreRoutes);
//Non existant routes regardless of the method used(get, post, delete) will be caught by this middleware

// This will always be the last endpoint in this file
app.use((req, res) => {
  res.status(404).send("Oops! Route not found.");
});

//6.Bootstrapping server
// This should always be the last line in this file
app.listen(PORT, () => console.log(`listening on port ${PORT}`)); // new
