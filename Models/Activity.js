const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  registeredToday: {
    type: Number,
    default: 0
  },
  vehiclesParked: {
    type: Number,
    default: 0
  },
  signedOutToday: {
    type: Number,
    default: 0
  },
  revenueToday: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Activity", activity);