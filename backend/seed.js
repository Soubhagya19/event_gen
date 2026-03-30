const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/eventzen")
    .then(async () => {
        await User.deleteMany();

        await User.create([
            { email: "admin@gmail.com", password: "123", role: "admin" },
            { email: "user@gmail.com", password: "123", role: "user" }
        ]);

        console.log("✅ Users created");
        process.exit();
    });