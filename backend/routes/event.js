const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// ✅ GET ALL EVENTS
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// ✅ GET USER EVENTS
router.get("/user/:email", async (req, res) => {
  const events = await Event.find({ userEmail: req.params.email });
  res.json(events);
});

// ✅ CREATE EVENT
router.post("/", async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.json(newEvent);
});

// ✅ APPROVE EVENT (FIX YOUR ERROR HERE)
router.put("/:id", async (req, res) => {
  try {
    const { venueCost, cateringCost, hallCost } = req.body;

    const totalBudget =
      Number(venueCost) +
      Number(cateringCost) +
      Number(hallCost);

    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      {
        status: "approved",
        totalBudget
      },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE EVENT
router.delete("/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;