const express = require("express");
const route = express.Router();
const { login, register } = require("../controller/AuthController");
const Joi = require("joi");
const validate = require("express-joi-validation").createValidator({});

// middleware
const verifyToken = require("../middleware/auth");

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(3).max(30).required(),
  mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  mail: Joi.string().email().required(),
  password: Joi.string().min(3).max(30).required(),
});

// create Register Route
route.post("/register", validate.body(registerSchema), register);

// create login route
route.post("/login", validate.body(loginSchema), login);

route.post("/test", verifyToken, (req, res) => {
  res.send("test");
});

module.exports = route;
