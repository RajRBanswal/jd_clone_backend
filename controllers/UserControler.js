const Users = require("../models/UserSchema");

exports.userRegistration = async (req, res) => {
  try {
    const result = await Users.create({
      name: req.body.name,
      mobile: req.body.mobile,
      email: req.body.email,
      password: req.body.password,
      address: "",
    });
    if (result) {
      res.json({
        status: 201,
        message: "User created successfully",
      });
    } else {
      res.json({ status: 422, message: error });
    }
  } catch (error) {
    res.json({ status: 422, message: error });
  }
};

exports.usersLogin = async (req, res) => {
  try {
    const result = await Users.find({
      $or: [{ mobile: req.body.username }, { email: req.body.username }],
    });

    if (result) {
      if (result[0].password === req.body.password) {
        res.json({
          status: 201,
          message: "User logged in successfully",
          data: result[0],
        });
      } else {
        res.json({
          status: 422,
          message: "Invalid Password",
        });
      }
    } else {
      res.json({
        status: 422,
        message: "Invalid Username",
      });
    }
  } catch (error) {
    res.json({ status: 422, message: error });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const result = await Users.findById({
      _id: req.params.id,
    });

    if (result) {
      res.json({
        status: 201,
        data: result,
      });
    } else {
      res.json({
        status: 422,
        message: "Data not found",
      });
    }
  } catch (error) {
    res.json({ status: 422, message: error });
  }
};
