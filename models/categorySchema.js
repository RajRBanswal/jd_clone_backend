const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: String,
    status: String,
  },
  { timestamps: true }
);

const Categories = mongoose.model("categories", categorySchema);

module.exports = Categories;
