const express = require("express");
const route = express.Router();
const { login, register } = require("../controller/AuthController");

// create Register Route
route.post("/register", register);

// create login route
route.post("/login", login);

module.exports = route;
