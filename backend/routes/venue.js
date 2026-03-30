const express = require("express");
const router = express.Router();
const Venue = require("../models/venue");

// GET all venues
router.get("/venues", async (req, res) => {
    const venues = await Venue.find();
    res.json(venues);
});

// ADD venue
router.post("/venues", async (req, res) => {
    const newVenue = new Venue(req.body);
    await newVenue.save();
    res.json(newVenue);
});

// DELETE venue
router.delete("/venues/:id", async (req, res) => {
    await Venue.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;