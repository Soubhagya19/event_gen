const router = require("express").Router();

let attendees = [];

router.get("/", (req, res) => res.json(attendees));

router.post("/", (req, res) => {
  const attendee = { id: Date.now(), ...req.body };
  attendees.push(attendee);
  res.json(attendee);
});

module.exports = router;