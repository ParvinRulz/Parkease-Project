const mongoose = require('mongoose');

const vehicleRegistration = new mongoose.Schema({
driverName: {
    type: String,
    trim: true
},
vehicleType: {
    type: String,
    trim: true
},
numberPlate: {
    type: String,
    trim: true
},
vehicleModel: {
    type: String,
    trim: true
},
arrivalTime: {
    type: String,
    trim: true
},
phoneNumber: {
    type: String,
    trim: true
},
ninNumber: {
    type: String,
    trim: true
},
status: {
    type: String,
    enum: ["Parked", "Signed-out"],
    default: "Parked"
},
});


module.exports = mongoose.model("Vehicle", vehicleRegistration);