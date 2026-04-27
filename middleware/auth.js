//Ensure user is authenticated
 const isAuthenticated = (req, res, next) => {
     if (req.isAuthenticated()) {
        return next();
    }
     res.redirect("/login")
 }
//Check if a logged in user is an Admin
 const isSystemAdmin = (req, res, next) => {
     if (req.isAuthenticated() && req.user.role === "System Admin") {
        return next();
     }
     res.status(403).send("Access denined: You are not the system admin")
 }
 const isSectionManager = (req, res, next) => {
     if (req.isAuthenticated() && req.user.role === "Section Manager") {
        return next();
     }
     res.status(403).send("Access denined: You are not the section manager")
 }
 const isParkingAttendant = (req, res, next) => {
     if (req.isAuthenticated() && req.user.role === "Parking Attendant") {
         return next();
     }
     res.status(403).send("Access denined: You are not the parking attendant")
 }
 module.exports = {isAuthenticated, isSystemAdmin, isSectionManager, isParkingAttendant};