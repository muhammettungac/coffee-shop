const mongoose = require("mongoose");

var newUser = new mongoose.Schema({
  mail: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

var UserModel = mongoose.model("users", newUser);

module.exports = UserModel;
