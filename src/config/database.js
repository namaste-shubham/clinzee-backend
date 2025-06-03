const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://jyoti-enterprises:2at10r8lWtf1PYfQ@clinzee.vly55kt.mongodb.net/clinzee"
  );
};

module.exports = connectDB;
