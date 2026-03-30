const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String,
  catering: Number,
  hallSize: Number,
  userEmail: String,
  status: String,
  totalBudget: Number
});

module.exports = mongoose.model("Event", EventSchema);