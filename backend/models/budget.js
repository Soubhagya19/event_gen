// models/Budget.js
const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
  eventId: String,
  expense: String,
  amount: Number
});

module.exports = mongoose.model("Budget", BudgetSchema);