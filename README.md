# ParkEase Frontend

## Project Description
ParkEase is a web-based software solution designed to digitize the day-to-day operations of a
public parking facility that also offers tyre clinic and battery hire services. The system will support accurate record keeping, automated fee calculation, receipt generation, and daily revenue
reporting.

## Pages
login.html - Signing up and signing in page
attendantdashboard.html - Attendants' page
reports.html - Admin reports page
register.html - Vehicle registration page
signout.html - Receipt and signout page
tyre-hire.html - Tyre replacement and purchase page
battery.html - Different battery layouts page
 validateregex.js - The JavaScript validation form

## How to Run

1. Clone the repo: `git clone https://github.com/your-username/parkease-
frontend`

2. Open `index.html` in your browser (no server needed)
3. Login with: username `admin` password `admin123`

## Features Implemented
- [x] Login page with role-based redirect
- [x] Attendant Dashboard
- [x] Vehicle Registration with form validation
- [x] Sign-out page with fee calculation
- [x] Admin Reports page with table filtering

## Validation Rules Applied
1. Validate driver/receiver name
   Must start with capital letter
   No digits allowed
   Minimum 2 characters
   2. Validate Ugandan number plate
   Starts with U
   Alphanumeric only
   Max 8 characters
   Allows spaces (e.g. UBA 123X)
   3. Validate Ugandan phone number
   Acceptable formats:
   +256XXXXXXXXX
   07XXXXXXXX
   4. Validate Uganda National Identification Number
   Official format used by Uganda:
   2 letters + 8 digits + 2 letters + 1 digit

   Example:
   CM12345678PE1
   5. Calculate parking fee based on:
   - Vehicle type
   - Duration
   - Day or night
   - Short stay (<3 hours)
## Known Issues / Assumptions

## Author
Ruth Tusiime — Refactory CSE 2026