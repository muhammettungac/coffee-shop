const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require,
    },
    type: {
      type: String,
      require,
    },
    subType: {
      type: String,
      require,
    },
    price: {
      type: Number,
      require,
    },
    description: {
      type: String,
      require,
    },
    picture: {
      type: String,
      require,
    },
  },
  {
    timestamps: true,
  }
);

const coffeeModel = mongoose.model("coffees", coffeeSchema);
module.exports = coffeeModel;
