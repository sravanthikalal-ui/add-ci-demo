const express = require("express");
const add = require("./index");

const app = express();

// Simple route to test
app.get("/", (req, res) => {
  res.send("Welcome to Add CI Demo!");
});

// Route to add two numbers: /add?a=2&b=3
app.get("/add", (req, res) => {
  const a = Number(req.query.a || 0);
  const b = Number(req.query.b || 0);
  const result = add(a, b);
  res.send(`Result: ${result}`);
});

// Use PORT from environment (for deployment) or 3000 locally
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
