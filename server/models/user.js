const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
    maxlength: 30,
    unique: true,
  },
  password: {
    type: String,
  },
  mail: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
