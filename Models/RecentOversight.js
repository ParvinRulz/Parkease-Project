const mongoose = require('mongoose');
const recentOversight = new mongoose.Schema({
    image: {
        type: String,
    },
    name: {
        type: String,
        trim: true
    },
    role: {
        type: String,
    },
    arrivalTime: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("RecentOversight", recentOversight);