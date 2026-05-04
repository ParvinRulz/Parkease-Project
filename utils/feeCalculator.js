// function to calculate fee based on vehicle type and duration
function calculateParkingFee(vehicleType, arrivalTime) {
  const signOutTime = new Date();
  const durationMs = signOutTime - arrivalTime;
  const durationHrs = Math.ceil(durationMs / (1000 * 60 * 60));
  const hour = new Date(arrivalTime).getHours();
  const isDay = hour >= 6 && hour < 19;
  const isShort = durationHrs < 3;

  const r = getVehicleRate(vehicleType);
  const rate = isShort ? r.short : isDay ? r.day : r.night;
  const fee = rate * durationHrs;
  return  fee;
}
function getVehicleRate(vehicleType) {
  const rates = {
    Truck: { short: 2000, day: 5000, night: 10000 },
    "Personal Car": { short: 2000, day: 3000, night: 2000 },
    Taxi: { short: 2000, day: 3000, night: 2000 },
    Coaster: { short: 3000, day: 4000, night: 2000 },
    "Boda-boda": { short: 1000, day: 2000, night: 2000 },
  };
  return rates[vehicleType] || rates["Personal Car"];
}

module.exports = calculateParkingFee;