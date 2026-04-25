const mongoose = require('mongoose');
const transaction = new mongoose.Schema({
    service: {
        type: String,
    },
    customer: {
        type: String,
    },
    amount: {
        type: Number,
    },
    transactionDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Transaction", transaction);