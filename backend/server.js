const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

console.log("🔥 CORRECT SERVER RUNNING");

// ✅ IMPORT ROUTES
const authRoutes = require("./routes/auth");

// ✅ USE ROUTES
app.use("/api", authRoutes);

// TEST ROUTE
app.get("/test", (req, res) => {
  res.send("Server OK");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});