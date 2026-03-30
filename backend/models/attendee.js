// models/Attendee.js
const mongoose = require("mongoose");

const AttendeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  eventId: String
});

module.exports = mongoose.model("Attendee", AttendeeSchema);