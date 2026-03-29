/* -----------------------------------------------------

   1. Validate driver/receiver name
   Must start with capital letter
   No digits allowed
   Minimum 2 characters
----------------------------------------------------- */
function validateName(name) {
return /^[A-Z][a-zA-Z\s'-]{1,}$/.test(name);
}


/* -----------------------------------------------------
   2. Validate Ugandan number plate
   Starts with U
   Alphanumeric only
   Max 8 characters
   Allows spaces (e.g. UBA 123X)
----------------------------------------------------- */
function validatePlate(plate) {

const cleanPlate = plate.replace(/\s/g,''); // remove spaces

return /^U[A-Z0-9]{2,6}$/i.test(cleanPlate);

}


/* -----------------------------------------------------
   3. Validate Ugandan phone number
   Acceptable formats:
   +256XXXXXXXXX
   07XXXXXXXX
----------------------------------------------------- */
function validatePhone(phone){

const cleanPhone = phone.replace(/\s/g,'');

return /^(\+256|0)(7)\d{8}$/.test(cleanPhone);

}


/* -----------------------------------------------------
   4. Validate Uganda National Identification Number
   Official format used by Uganda:
   2 letters + 8 digits + 2 letters + 1 digit

   Example:
   CM12345678PE1
----------------------------------------------------- */
function validateNIN(nin){

return /^[A-Z]{2}[0-9]{8}[A-Z]{2}[0-9]$/i.test(nin);

}


/* -----------------------------------------------------
   5. Calculate parking fee based on:
   - Vehicle type
   - Duration
   - Day or night
   - Short stay (<3 hours)
----------------------------------------------------- */
function calculateFee(vehicleType, arrivalTime, signOutTime){

// Calculate duration in milliseconds
const durationMs = signOutTime - arrivalTime;

// Convert duration to hours
const durationHrs = durationMs / (1000 * 60 * 60);

// Get arrival hour
const hour = new Date(arrivalTime).getHours();

// Determine if it is day or night
const isDay = hour >= 6 && hour < 19; // 6am - 6:59pm

// Determine if short stay
const isShort = durationHrs < 3;


// Parking rates table
const rates = {

'Truck': { short:2000, day:5000, night:10000 },

'Personal Car': { short:2000, day:3000, night:2000 },

'Taxi': { short:2000, day:3000, night:2000 },

'Coaster': { short:3000, day:4000, night:2000 },

'Boda-boda': { short:1000, day:2000, night:2000 }

};


// Select rate group
const r = rates[vehicleType] || rates['Personal Car'];


// Determine fee
return isShort ? r.short : (isDay ? r.day : r.night);

}



/* -----------------------------------------------------
   6. Event Listener for form submission
----------------------------------------------------- */
document.getElementById("parkingForm").addEventListener("submit", function(e){

// Prevent page refresh
e.preventDefault();


// Get form values
let name = document.getElementById("driverName").value.trim();
let plate = document.getElementById("numberPlate").value.trim();
let phone = document.getElementById("phoneNumber").value.trim();
let nin = document.getElementById("nin").value.trim();
let vehicle = document.getElementById("vehicleType").value;

let arrivalTime = new Date(document.getElementById("arrivalTime").value);
let signOutTime = new Date(document.getElementById("signOutTime").value);


// ---------------- VALIDATIONS ----------------

// Name validation
if(!validateName(name)){
alert("Invalid driver name. Must start with capital letter and contain no numbers.");
return;
}


// Plate validation
if(!validatePlate(plate)){
alert("Invalid Ugandan number plate.");
return;
}


// Phone validation
if(!validatePhone(phone)){
alert("Invalid Ugandan phone number.");
return;
}


// NIN validation (required only for boda-boda)
if(vehicle === "Boda-boda" && !validateNIN(nin)){
alert("Invalid Uganda NIN format. Example: CM12345678PE1");
return;
}


// Time validation
if(signOutTime <= arrivalTime){
alert("Sign-out time must be after arrival time.");
return;
}


// ---------------- FEE CALCULATION ----------------

let fee = calculateFee(vehicle, arrivalTime, signOutTime);


// ---------------- RECEIPT GENERATION ----------------

let now = new Date();

let year = now.getFullYear();

let month = String(now.getMonth()+1).padStart(2,'0');

let random = Math.floor(1000 + Math.random()*9000);

let receiptNumber = `PE-${year}-${month}-${random}`;



// ---------------- SUCCESS MESSAGE ----------------

alert(
"Parking Registered Successfully\n\n" +
"Receipt Number: " + receiptNumber + "\n" +
"Parking Fee: UGX " + fee
);


// Reset form
document.getElementById("parkingForm").reset();

});