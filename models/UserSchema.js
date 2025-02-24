const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: String,
    mobile: String,
    email: String,
    password: String,
    address: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", usersSchema);
module.exports = Users;
