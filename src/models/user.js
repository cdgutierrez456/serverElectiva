const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
    min: 3,
  },
  lastName: {
    type: String,
    required: false,
    min: 3,
  },
  email: {
    type: String,
    unique: false,
  },
  password: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false,
  },
  active: {
    type: Boolean,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
