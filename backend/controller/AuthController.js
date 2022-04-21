const bcrypt = require("bcryptjs");

const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { username, mail, password } = req.body;

    // check existing user
    const existingUser = await User.exists({ mail: mail.toLowerCase() });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user document and save in database

    const user = new User({
      username,
      mail: mail.toLowerCase(),
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
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { mail, password } = req.body;
    const user = await User.findOne({ mail: mail.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = "JWT TOKEN";
      return res.status(200).json({
        message: "User logged in successfully",
        userDetails: {
          username: user.username,
          mail: user.mail,
          token,
        },
      });
    }
    return res.status(401).send("Invalid username or password");
  } catch (err) {
    res.status(500).send("Something went wrong. Please try again later.");
    console.log(err);
  }
};
