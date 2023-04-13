const mongoose = require("mongoose");

const newUserSchema = new mongoose.Schema(
  {
    mail: {
      type: String,
      require,
    },
    name: {
      type: String,
      require,
    },
    password: {
      type: String,
      require,
    },
    isAdmin: { type: Boolean, require, default: false },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", newUserSchema);

module.exports = UserModel;
