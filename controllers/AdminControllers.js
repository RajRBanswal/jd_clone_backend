const Admins = require("../models/adminSchema");
const Categories = require("../models/categorySchema");
const Keywords = require("../models/keywordsSchema");

exports.adminLogin = async (req, res) => {
  try {
    const result = await Admins.find({
      email: req.body.username,
    });
    if (result) {
      if (result[0].password === req.body.password) {
        res.json({
          status: 201,
          message: "Admin logged in successfully",
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

exports.getCategory = async (req, res) => {
  try {
    const result = await Categories.find();
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

exports.addCategory = async (req, res) => {
  try {
    const result = await Categories.create({
      categoryName: req.body.Category,
      status: "Active",
    });
    if (result) {
      res.json({
        status: 201,
        message: "Category added successfully",
        data: result,
      });
    } else {
      res.json({
        status: 422,
        message: "Category not added",
      });
    }
  } catch (error) {
    res.json({ status: 422, message: error });
  }
};

exports.getKeywords = async (req, res) => {
  try {
    const result = await Keywords.find();
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

exports.addKeywords = async (req, res) => {
  try {
    const result = await Keywords.create({
      keyword: req.body.keyword,
      price: req.body.price,
      status: "Active",
    });
    if (result) {
      res.json({
        status: 201,
        message: "Keywords added successfully",
        data: result,
      });
    } else {
      res.json({
        status: 422,
        message: "Keywords not added",
      });
    }
  } catch (error) {
    res.json({ status: 422, message: error });
  }
};
