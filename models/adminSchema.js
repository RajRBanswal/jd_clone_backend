const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const Admins = mongoose.model("admins", adminSchema);

module.exports = Admins;


