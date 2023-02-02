const mongoose = require("mongoose");

const User = new mongoose.Schema({
  createDate: { type: String, required: true },
  avatar: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  patronymic: { type: String },
  email: { type: String, required: true },
  about: { type: String },
});

module.exports = mongoose.model("User", User);
