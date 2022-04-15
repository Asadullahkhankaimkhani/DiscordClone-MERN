const express = require("express");
const route = express.Router();
const { login, register } = require("../controller/AuthController");
const Joi = require("joi");
const validate = require("express-joi-validation").createValidator({});

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30),
  password: Joi.string().min(3).max(30),
  mail: Joi.string().email(),
});

const loginSchema = Joi.object({
  username: Joi.string().min(3).max(30),
  password: Joi.string().min(3).max(30),
});

// create Register Route
route.post("/register", validate.body(registerSchema), register);

// create login route
route.post("/login", validate.body(loginSchema), login);

module.exports = route;
