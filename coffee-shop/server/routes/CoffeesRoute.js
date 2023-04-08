const coffeeModel = require("../models/CoffeeModel");
const express = require("express");
// const app=express();
const router = express.Router();

router.get("/getCoffees", async (req, res) => {
  try {
    const coffees = await coffeeModel.find({});
    res.send(coffees);
  } catch (error) {
    console.log(err);
  }
});

module.exports = router;
