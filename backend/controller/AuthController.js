const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { username, mail, password } = req.body;

    // check existing user
    const existingUser = await User.exists({ mail });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user document and save in database

    const user = new User({
      username,
      mail,
      password: encryptedPassword,
    });

    await user.save();

    // create JWT token
    const token = "JWT TOKEN";

    res.status(201).json({
      message: "User created successfully",
      userDetails: {
        username,
        mail,
        token,
      },
    });
  } catch (err) {
    res.status(500).send("Error occurred . Please Try Again!");
  }
};

exports.login = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send(err);
  }
};
