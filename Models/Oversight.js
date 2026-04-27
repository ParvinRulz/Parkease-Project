const mongoose = require("mongoose");

const oversight = new mongoose.Schema(
  {
    parkingRevenue: {
      type: Number,
      default: 0,
    },
    tyreClinicRevenue: {
      type: Number,
      default: 0,
    },
    batteryRevenue: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Oversight", oversight);
