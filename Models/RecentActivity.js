const mongoose = require('mongoose');
const recentActivity = new mongoose.Schema({
    plate: {
        type: String,
        trim: true
    },
    driver: {
        type: String,
        trim: true
    },
    action: {
        type: String,
        enum: ["Parked", "Signed-out"],
    default: "Parked"
    },
    arrivalTime: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("RecentActivity", recentActivity);