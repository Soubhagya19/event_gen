router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // ✅ Hardcoded admin (for now)
  if (email === "admin@gmail.com" && password === "123456") {
    return res.json({
      message: "Login success",
      user: {
        email,
        role: "admin"
      }
    });
  }

  // Normal user
  if (email === "user@gmail.com" && password === "123456") {
    return res.json({
      message: "Login success",
      user: {
        email,
        role: "user"
      }
    });
  }

  // ❌ Invalid
  return res.status(401).json({
    message: "Invalid credentials"
  });
});