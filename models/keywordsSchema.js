const mongoose = require("mongoose");

const keywordSchema = new mongoose.Schema(
  {
    keyword: String,
    price: Number,
    status: String,
  },
  { timestamps: true }
);

const Keywords = mongoose.model("keywords", keywordSchema);

module.exports = Keywords;
