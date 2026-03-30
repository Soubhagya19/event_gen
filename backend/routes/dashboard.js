const router = require("express").Router();
const Event = require("../models/Event");

router.get("/", async (req, res) => {
    const events = await Event.countDocuments();
    const approved = await Event.countDocuments({ status: "approved" });

    res.json({
        totalEvents: events,
        approvedEvents: approved
    });
});

module.exports = router;