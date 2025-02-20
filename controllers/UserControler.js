const Users = require("../models/UserSchema");

exports.userRegistration = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  const result = await Users.create({
    name: name,
    mobile: mobile,
    email: email,
    password: password,
  });
  if (result) {
    res.json({ status: 200, message: "User created successfully" });
  } else {
    res.json({ status: 422, message: "User not created" });
  }
};
