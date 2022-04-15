const express = require("express");
const route = express.Router();

// create Register Route
route.post("/register", (req, res) => {
  res.send("Register Route");
});

// create login route
route.post("/login", (req, res) => {
  res.send("Login Route");
});

module.exports = route;
