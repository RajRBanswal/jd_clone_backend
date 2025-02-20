const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    email: String,
    password: String,
    profileImage: String,
    address: String,
  },
  { timestamps: true }
);

const Vendors = mongoose.model("vendors", vendorSchema);

module.exports = Vendors;
