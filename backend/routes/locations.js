// routes/locations.js
const router = require("express").Router();
const Location = require("../models/Location");

router.post("/", async (req, res) => {
  const loc = await Location.create(req.body);
  res.json(loc);
});

router.get("/", async (req, res) => {
  res.json(await Location.find());
});

module.exports = router;