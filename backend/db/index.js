const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("### DATABASE CONNECTED ###");
  } catch (err) {
    console.log("Mongoose Error");
    console.error(err);
  }
};
